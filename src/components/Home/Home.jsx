import React from 'react';
import Card from '../Card/Card'
import './Home.css'
import '../../assets/css/w3.css'

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

function Home() {
    return (
        <div class="w3-container home__container">
            <ul class="w3-ul w3-card-4">
                <li class="w3-bar">
                    <img src={img1} class="w3-bar-item w3-circle w3-hide-small home__image" />
                    <div class="w3-bar-item">
                        <span class="w3-large">Mike</span><br></br>
                        <span>Web Designer</span>
                    </div>
                </li>

                <li class="w3-bar">
                    <img src={img2} class="w3-bar-item w3-circle w3-hide-small home__image" />
                    <div class="w3-bar-item">
                        <span class="w3-large">Jill</span><br></br>
                        <span>Support</span>
                    </div>
                </li>

                <li class="w3-bar">
                    <img src={img3} class="w3-bar-item w3-circle w3-hide-small home__image" />
                    <div class="w3-bar-item">
                        <span class="w3-large">Jane</span><br></br>
                        <span>Accountant</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Home
