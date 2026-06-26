function Tile({char}) {
    return ( 
    <div class="tile">
        <strong>{char?.toUpperCase()}</strong>
    </div> 
    );
}

export default Tile;