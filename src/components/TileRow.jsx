import Tile from './Tile';

function TileRow({word}) {

    return ( 
    <div className="tile-row">
        {/* {word.split('').map( (char,i) => ( */}
            <Tile key={0} char={word[0]}></Tile>
            <Tile key={1} char={word[1]}></Tile>
            <Tile key={2} char={word[2]}></Tile>
            <Tile key={3} char={word[3]}></Tile>
            <Tile key={4} char={word[4]}></Tile>
        {/* ))} */}
    </div> 
    );
}

export default TileRow;