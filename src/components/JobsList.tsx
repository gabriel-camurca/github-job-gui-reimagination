import { useState } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { JobCard } from "./JobCard";
import styles from "../styles/components/JobsList.module.css"

import jobs from "../../jobs.json"
import axios from "axios";

export function JobsList(){

    const [jobsFetched, setJobsFetched] = useState([]);

    // https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json
    // , {params: {markdown:true}}
    // var jobsFetch = axios.get('https://jobs.github.com/positions.json',
    // {
    //     method: 'GET',
    //     headers: {'Access-Control-Allow-Origin': true}
    // }).then(res => setJobsFetched(res.data));

    return(
        <div className={styles.listingContainer}>
            {jobs.map(item => {return <JobCard key={item.id} job={item} />}) }
        </div>
    );
}