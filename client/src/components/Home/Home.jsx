import React, { useState, useEffect } from "react";

import UserService from "../../services/user-service";
import img1 from "./img1.png";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content = (error.response && error.response.data) || error.message || error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="w3-container home__container">
    <ul className="w3-ul w3-card-4">
        {/* {content.jobs.map((job) => (
            <li className="w3-bar" key={job.id}>
                <img src={img1} class="w3-bar-item w3-circle w3-hide-small home__image" />
                <div class="w3-bar-item">
                    <span class="w3-large">Mike</span><br></br>
                    <span>{job.description}</span>
                    <h3>{content}</h3>
                </div>
                <button className="w3-button  w3-green w3-section w3-padding w3-right " onClick={() => dispatch(appliedJob(job.id))}>Apply</button>
            </li>
        ))} */}
        <li className="w3-bar" >
                <img src={img1} className="w3-bar-item w3-circle w3-hide-small home__image" />
                <div className="w3-bar-item">
                    <span className="w3-large">Mike</span><br></br>
                    <span>{content}</span>
                </div>
                {/* <button className="w3-button  w3-green w3-section w3-padding w3-right " onClick={() => dispatch(appliedJob(job.id))}>Apply</button> */}
            </li>
    </ul>
</div> 
  );
};

export default Home;
