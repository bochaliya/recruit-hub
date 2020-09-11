import React from 'react'
import './StartPage.css'
import { Link } from "react-router-dom";
import company from './company.png'
import user from './user.png'

function StartPage() {
    return (
        <div className="main_container">
            <div className="column">
                <Link to="/login">
                    <div className="post-module">
                        <img src={user} alt="" className="card_img" />
                    </div>
                </Link>
            </div>
            <div className="column">
                <Link to="/signup">
                    <div className="post-module">
                        <img src={company} alt="" className="card_img" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default StartPage
