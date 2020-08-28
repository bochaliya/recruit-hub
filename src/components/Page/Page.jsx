import React from 'react'
import './Page.css'
import { Link } from "react-router-dom";
import company from './company.png'
import user from './user.png'

function Page() {
    return (
        <div class="main_container">
            <div class="column">
                <Link to="/login">
                    <div class="post-module">
                        <img src={user} alt="" className="card_img" />
                    </div>
                </Link>
            </div>
            <div class="column">
                <Link to="/signup">
                    <div class="post-module">
                        <img src={company} alt="" className="card_img" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Page
