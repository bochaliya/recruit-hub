import React from "react";
import web from "../images/job.jpg";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/jobs"
                btname="Get Started"
            />
        </>
    );
};

export default Home;
