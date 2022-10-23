import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const createGroupSession = functions.https.onRequest((request, response) => {
    /*
    creates group session in db
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.json(request.query.text);
});

export const getGroupSession = functions.https.onRequest((request, response) => {
    /*
    using given group session id
    fetch session info (other users in session)
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.json(request);
});

export const getUserTopTracks = functions.https.onRequest((request, response) => {
    /*
    Get group member's top tracks and push them to the database for that group
    spotify auth would be here
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const setUserDetails = functions.https.onRequest((request, response) => {
    /*
    some fun things like icon name, etc
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const fetchGroupRecomendations = functions.https.onRequest((request, response) => {
    /*
    singular recomendation have been acquired a previous step
    fetch the completed recomendations to be picked from for final step
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const setUserChoices = functions.https.onRequest((request, response) => {
    /*
    sends song choices by user to be logged in database
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const fetchGroupChoices = functions.https.onRequest((request, response) => {
    /*
    all the choices of the group and display them
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const createPlaylist = functions.https.onRequest((request, response) => {
    /*
    Once the group playlist is selected,
    create playlist on spotify
    */
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});
