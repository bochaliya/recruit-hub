import React from 'react'
import './Login.css'
import img1 from './img/img1.png';
import { Link } from "react-router-dom";
import '../../assets/css/w3.css'

// onclick="document.getElementById('id01').style.display='none'"
// onclick="document.getElementById('id01').style.display='none'"
function Login() {
    return (
        <div class="w3-container">
            <div id="id01" class="login_container" >
                <div class="w3-modal-content w3-card-4 w3-animate-zoom login_modal">
                    <div class="w3-center"><br></br>
                        <span class="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
                        <img src={img1} alt="" class="w3-circle w3-margin-top login_img" />
                    </div>
                    <form class="w3-container" action="/action_page.php">
                        <div class="w3-section">
                            <label><b>Username</b></label>
                            <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required />
                            <label><b>Password</b></label>
                            <input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw" required />
                            <Link to="/home">
                                <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
                            </Link>
                            <input class="w3-check w3-margin-top" type="checkbox" checked="checked" /> Remember me
                            </div>
                    </form>
                    <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <button type="button" class="w3-button w3-red">Cancel</button>
                        <span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
