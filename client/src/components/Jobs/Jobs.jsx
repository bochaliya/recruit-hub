import './Jobs.css'
import '../../assets/css/w3.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs, getUnappliedJobs, appliedJob } from '../../store/jobs';

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

const JobsList = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(getUnappliedJobs);
    useEffect(() => {
        dispatch(loadJobs());
    }, [])
    return (
        <div className="w3-container home__container">
            <ul className="w3-ul w3-card-4">
                {jobs.map((job) => (
                    <li className="w3-bar" key={job.id}>
                        <img src={img1} class="w3-bar-item w3-circle w3-hide-small home__image" />
                        <div class="w3-bar-item">
                            <span class="w3-large">Mike</span><br></br>
                            <span>{job.description}</span>
                        </div>
                        <button className="w3-button  w3-green w3-section w3-padding w3-right " onClick={() => dispatch(appliedJob(job.id))}>Apply</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default JobsList;