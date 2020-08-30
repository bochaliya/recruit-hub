import React from 'react'
import '../../assets/css/w3.css'
import '../../assets/css/font-awesome.css'

function Sidebar() {
    return (
        <dev class="w3-blue-grey">
            <div class="w3-sidebar w3-bar-block w3-blue-grey w3-xlarge " >
                <a class="w3-bar-item w3-button w3-margin-top"><i class="fa fa-home"></i><span class="w3-margin-left">Home</span></a>
                <a class="w3-bar-item w3-button"><i class="fa fa-search"></i><span class="w3-margin-left">Search</span></a>
                <a class="w3-bar-item w3-button"><i class="fa fa-envelope"></i><span class="w3-margin-left">Mail</span></a>
                <a class="w3-bar-item w3-button"><i class="fa fa-globe"></i><span class="w3-margin-left">Internet</span></a>
                <a class="w3-bar-item w3-button"><i class="fa fa-trash"></i><span class="w3-margin-left">Delete</span></a>
            </div>
        </dev>
    )
}

export default Sidebar
