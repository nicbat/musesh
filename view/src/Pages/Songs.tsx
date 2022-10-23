import SongTile from "../Components/SongTile";

function Songs(selectedSongs:any) {
    return (
        <>
        {selectedSongs.current.map((song:any)=>{
            return(
            <SongTile title={song.title} artist={song.title} album={song.album} image={song.image}/>

            );
        })}
        </>
    );
}

export default Songs;