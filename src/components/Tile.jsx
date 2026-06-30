function Tile({char, status}) {
    return ( 
    <div  className={`tile ${status.toLowerCase()}`}>
        <strong>{char?.toUpperCase()}</strong>
    </div> 
    );
}

export default Tile;