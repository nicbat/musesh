import HeaderBar from "../Components/HeaderBar";
import SongTile from "../Components/SongTile";

function SelectSongs() {


    return (
        <div>
            <HeaderBar text={"Pick a few of your top songs:"} buttontext={"click me!"} buttonOnClick={(e) => {
                console.log("click!");
            }} />
            <SongTile title={"Karma"} artist={"Taylor Swift"} album={"Midnights"} image={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default"}/>
        </div>
    )
}

export default SelectSongs;