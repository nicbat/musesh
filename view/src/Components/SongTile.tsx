import { useState } from "react";
import "./component.css"
interface SongTileProps {
    title: string,
    artist: string,
    album: string,
    image: string //probably?
}

function SongTile(props: SongTileProps) {

    const [hover, setHover] = useState(false);
    const [selected, setSelect] = useState(false);
    return (
        <div className={selected ? "songTile clicked" : "songTile"} onClick={(e) => {
            setSelect(!selected);
            console.log(selected);
        }}>
            <div className="songImage">
                <img className="songImage" src={props.image} 
                onMouseEnter={(e) => {
                    setHover(true);
                }} onMouseLeave={(e) => {
                    setHover(false);
                }} 
                />
            </div>
            {hover && <div className="songText">
                {props.title}
                {props.artist}
                {props.album}
            </div>}
        </div>
    )
}

export default SongTile;