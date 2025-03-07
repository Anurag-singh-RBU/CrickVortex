import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(

        <div>

        <nav>

            <div id = "logo"></div>
            <Link to = "/">Home</Link>
            <Link to = "/Upcoming">Upcoming</Link>
            <Link to = "/Ongoing">Ongoing</Link>
            <a href = "https://github.com/Anurag-singh-RBU" id = "github"></a>
            <a href = "https://x.com/anuragRBU" id = "twitter"></a>
            <a href = "https://www.linkedin.com/in/anuragsinghrbu/" id = "linkedIn"></a>

        </nav>

        </div>

    );

}

export default Navbar;
