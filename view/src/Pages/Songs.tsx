import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { webSocketContext } from "../App";
import HeaderBar from "../Components/HeaderBar";
import SongTile from "../Components/SongTile";

function Songs(selectedSongs:any) {
    const navigate = useNavigate();
    const {groupId} = useParams();
    const ws = React.useContext(webSocketContext); 
    return (
        <>
            <HeaderBar text={"These are the songs your group picked!"} buttontext={"create playlist"} buttonOnClick={(e) => {
                // ws.send(JSON.stringify({mode:"createPlaylist"}));
                }} />
            {/* {selectedSongs.current.map((song:any)=>{
                return(
                <SongTile title={song.title} artist={song.title} album={song.album} image={song.image}/>

                );
            })} */}
            <div className="selectSongs">
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
        </>
    );
}

export default Songs;