import React from 'react'
import './Card.css';

function Card({ id, title, image, salary, rating }) {
    return (
        <div class="post-module">
            <div class="thumbnail">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
            </div>
            <div class="post-content">
                <h1 class="title">City Lights in New York</h1>
                <h2 class="sub_title">The city that never sleeps.</h2>
                <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i>
            6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#">39 comments</a></span></div>
            </div>
        </div>
    )
}

export default Card
