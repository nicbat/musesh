import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { webSocketContext } from "../App";
import HeaderBar from "../Components/HeaderBar";
import SongTile from "../Components/SongTile";
import "../Styles/SelectSongs.css"

function SelectSongs(selectedSongs:React.MutableRefObject<[]>,recomendedSongs:React.MutableRefObject<[]>) {
    const navigate = useNavigate();
    const {groupId} = useParams();
    const ws = React.useContext(webSocketContext); 
    useEffect(() => {
        ws.addEventListener("message", function(evt) {
            const message = JSON.parse(evt.data);
            console.log("message from server", message);
            if(message.mode && (message.mode === "selectedSongs")){
                selectedSongs = message.selectedSongs;
                navigate("/songs/"+message.groupId);
            }
        });
    }, []);
    
    return (
        <div className="selectSongs">
            <HeaderBar text={"Pick a few of your top songs:"} buttontext={"click me!"} buttonOnClick={(e) => {
                console.log("click!");
            }} />
            {recomendedSongs.current.map((song)=>{
                return(
                <SongTile title={song.title} artist={song.title} album={song.album} image={song.image}/>

                );
            })}
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
        </div>
    )
}

export default SelectSongs;