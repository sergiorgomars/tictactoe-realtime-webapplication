


export default function Navbar(){

    return(
        
        <div className="float-left w-full bg-zinc-800 text-white p-2 text-lg text-center">

            <a href="/">
                <div className="float-left m-2 p-2 hover:bg-zinc-500 hover:cursor-pointer	">
                    <i className="fa-solid fa-gamepad"></i> Lobby
                </div>
            </a>

            <a href="/profile">
                <div className="float-left m-2 p-2 hover:bg-zinc-500 hover:cursor-pointer	">
                    <i className="fa-solid fa-user"></i> My profile
                </div>
            </a>


            <a href="/top-players">
                <div className="float-left m-2 p-2 hover:bg-zinc-100 hover:cursor-pointer	hover:text-amber-500">
                    <i className="fa-solid fa-trophy"></i> Top 10
                </div>
            </a>


           

            
            
        </div>
    )
}