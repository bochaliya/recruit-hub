import React from "react";
import web from "../images/job.jpg";
import Common from "./Common";

const Services = (props) => {
    return (
        <>
            <Common
                name="Welcome to "
                imgsrc={web}
                visit="/contact"
                btname="Contact Here"
            />
        </>
    );
};

export default Services;
