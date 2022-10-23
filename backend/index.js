const http = require('http');
var needle = require('needle');
var WebSocketServer = require('websocket').server;
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const groupServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

let connections = [];

let groupDetails = [{
    id:"",
    userCount: 0,
    hasVotedCount: 0,
    topSongs:[],
    selectedSongs:[],
    recomendedSongs:[],
    chosenSongs:[]
}]

const makeId = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const createUserSession = ()=> {
    let id = makeId(5);
    if(groupDetails.findIndex((group)=>{
        return group.id == id;
    }) === -1){
        id = makeId(5);
    }
    id = makeId(5);

    groupDetails.push({
        id:id,
        userCount: 1,
        hasVotedCount: 0,
        topSongs:[],
        selectedSongs:[],
        recomendedSongs:[],
    });
    return id;
}


//receives arrays from frontend and loads them into
const loadTopSongs = (group, addedSongs) => {
    return group.topSongs.concat(addedSongs);
}

//receives arrays from frontend and loads them into
const addSelectedSongs = (group, addedSongs) => {
    return group.selectedSongs.concat(addedSongs);
}

//receives arrays from flask app and sends them to the frontends
const sendRecommendedSongs = (groupId) => {
    needle.get('http://localhost:5000', function(error, response) {//request from flask app
    if (!error && response.statusCode == 200)
        console.log(response.body);
        connections.forEach((connection) => {
            connection.sendUTF(JSON.stringify({
                mode: "recomendedSongs",
                id:groupId,
                recomendation: response.body,
            }))
        });
    });
}

const getGroupSession = (inputId) => {
    return groupDetails.find((group)=>{
        return group.id == inputId;
    });
}


groupServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    let connection = request.accept('echo-protocol', request.origin);
    connections.push(connection);
    console.log((new Date()) + ' Connection accepted.');
    
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            console.log('Received Message: ' + JSON.parse(message.utf8Data).mode);
            let messageData = JSON.parse(message.utf8Data);
            connection.sendUTF(message.utf8Data);
            if((messageData.mode && messageData.mode === "groupCreate")){
                let id = createUserSession();
                //if there are multiple open looking for new group, this will create an error
                //to fix this, create a unique string/key on the frontend and expect on reponse
                connections.forEach((connection) => {
                    connection.sendUTF(JSON.stringify({
                        mode:"groupCreate",
                        groupId:id,
                    }))
                });
                sendRecommendedSongs("");
            } else if((messageData.mode && messageData.mode === "groupJoin")){
                let currentGroup = getGroupSession(messageData.groupId);
                currentGroup.userCount++;
            }else if((messageData.mode && messageData.mode === "topSong")){
                //load songs into array for group //info from frontend
                let currentGroup = getGroupSession(messageData.groupId);
                loadTopSongs(currentGroup,messageData.topSongs);
            }else if((messageData.mode && messageData.mode === "startVote")){
                //on query from group user
                //get recommended songs
                let currentGroup = getGroupSession(messageData.groupId);
                sendRecommendedSongs(currentGroup);
            } else if((messageData.mode && messageData.mode === "selectedSongs")){
                //info from frontend, every time a vote comes in
                let currentGroup = getGroupSession(messageData.groupId);
                currentGroup.hasVotedCount++;
                addSelectedSongs(currentGroup,messageData.selectedSongs);
                if(currentGroup.hasVotedCount === currentGroup.userCount){
                    connections.forEach((connection) => {
                        connection.sendUTF(JSON.stringify({
                            mode: "selectedSongs",
                            id:id,
                            selectedSongs: currentGroup.selectedSongs,
                        }))
                    });
                }
            }
        }
        // else if (message.type === 'binary') {
        //     console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        //     connection.sendBytes(message.binaryData);
        // }
        else{
            console.log("message not in expected format");
            connection.sendUTF("message not in expected format");
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});


