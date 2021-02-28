import { useState } from "react";
import { JobCard } from "./JobCard";
import styles from "../styles/components/JobsList.module.css"

import  allJobs from "../../jobs.json"
import axios from "axios";

export function JobsList(){

    const [jobsFetched, setJobsFetched] = useState([]);

    const [jobs, setJobs] = useState(allJobs);

    // https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json
    // , {params: {markdown:true}}
    // axios.get('https://jobs.github.com/positions.json',
    // {   params:{ markdown: true},
    //     headers: {'Access-Control-Allow-Origin' : '*', 'Accept' : 'text/plain'}
    // }).then(res => console.log(res.data)).catch(e => {console.log(e)});

    return(
        <div className={styles.listingContainer}>
            {jobs.map(item => {return <JobCard key={item.id} job={item} />}) }
        </div>
    );
}