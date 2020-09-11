import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-2 col-5 mx-auto">
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top " alt="..." />
                    <div class="card-body">
                        <h6 class="card-title font-weight-bold text-capitalize">
                            {props.title}
                        </h6>
                        <p class="card-text py-2">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <NavLink to="/" class="btn btn-outline-primary">
                            Check Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
