function Tile({char, status}) {
    return ( 
    <div className={`tile flex rounded-md grow-0 shrink-1 basis-30 border-5 justify-center items-center text-center
        border-gray-600 border-solid h-30 w-20 ${status.toLowerCase()}`}>
        <strong className="text-3xl text-white align-middle">{char?.toUpperCase()}</strong>
    </div> 
    );
}

export default Tile;