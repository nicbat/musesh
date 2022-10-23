import SongTile from "../Components/SongTile";

function Songs(selectedSongs:React.MutableRefObject<[]>) {
    return (
        <>
        {selectedSongs.current.map((song)=>{
            return(
            <SongTile title={song.title} artist={song.title} album={song.album} image={song.image}/>

            );
        })}
        </>
    );
}

export default Songs;