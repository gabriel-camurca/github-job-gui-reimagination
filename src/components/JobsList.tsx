import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { JobCard } from "./JobCard";
import styles from "../styles/components/JobsList.module.css"

import jobs from "../../jobs.json"
import axios from "axios";

export function JobsList(){

    // var jobsFetch = axios.get("https://jobs.github.com/positions.json");

    return(
        <div className={styles.listingContainer}>
            {jobs.map(item => {return <JobCard key={item.id} job={item} />}) }
        </div>
    );
}