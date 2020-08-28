import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/w3.css'


const Header = () => {
    return (
        <div class="w3-bar w3-blue-grey w3-xlarge ">
            <Link to="/" class="w3-bar-item w3-button w3-left"><a>Recruit-Hub</a></Link>
            <Link to="/" class="w3-bar-item w3-button w3-right"><a>Logout</a></Link>
            <Link to="/about" class="w3-bar-item w3-button w3-right"><a>About</a></Link>
            <Link to="/home" class="w3-bar-item w3-button w3-right"><a>Home</a></Link>
        </div>
    );
}
export default Header;
