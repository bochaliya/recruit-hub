import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/font-awesome.css'
import '../../assets/css/templatemo-breezed.css'
import '../../assets/css/lightbox.css'
import '../../assets/css/flex-slider.css'

import img1 from '../../assets/images/project-big-item-01.jpg'
import img2 from '../../assets/images/project-big-item-02.jpg'
import img3 from '../../assets/images/project-big-item-03.jpg'
import img4 from '../../assets/images/project-big-item-04.jpg'
import img5 from '../../assets/images/project-big-item-05.jpg'
import img6 from '../../assets/images/project-big-item-06.jpg'

//import './JobPannel.css'

function JobPannel() {
    return (
        <section class="section" id="projects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="section-heading">
                            <h6>All Jobs</h6>
                            <h2>Jobs</h2>
                        </div>
                        <div class="filters">
                            <ul>
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".des">Web Design</li>
                                <li data-filter=".dev">Web Development</li>
                                <li data-filter=".gra">Graphics</li>
                                <li data-filter=".tsh">Artworks</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="filters-content">
                            <div class="row grid">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                                    <div class="item">
                                        <a href={"assets/images/project-big-item-01.jpg"} data-lightbox="image-1" data-title="Our Projects"><img src={img1} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                                    <div class="item">
                                        <a href="assets/images/project-big-item-02.jpg" data-lightbox="image-1" data-title="Our Projects"><img src={img2} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all gra">
                                    <div class="item">
                                        <a href="assets/images/project-big-item-03.jpg" data-lightbox="image-1" data-title="Our Projects"><img src={img3} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all tsh">
                                    <div class="item">
                                        <a href="assets/images/project-big-item-04.jpg" data-lightbox="image-1" data-title="Our Projects"><img src={img4} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                                    <div class="item">
                                        <a href="assets/images/project-big-item-05.jpg" data-lightbox="image-1" data-title="Our Projects"><img src={img5} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                                    <div class="item">
                                        <a href="assets/images/project-big-item-06.jpg" data-lightbox="image-1" data-title="Our Projects"><img src={img6} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobPannel
