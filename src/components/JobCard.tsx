import { useState } from "react"
import styles from "../styles/components/JobCard.module.css"

import ReactMarkdown from "react-markdown";

interface Job{
    id:           string;
    type:         string;
    url:          string;
    created_at:   string;
    company:      string;
    company_url:  string;
    location:     string;
    title:        string;
    description:  string;
    how_to_apply: string;
    company_logo: string;
}

interface JobDataParam{
    job: Job
}

export function JobCard({job}: JobDataParam){

    const [isActive, setIsActive] = useState(false);

    function changeDisplay(){
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }
    // TODO: The following section can be improved with bootstrap. Because of time constraints it won't be possible to implement such improvement
    return(
        <>
            {isActive ? (
                <>
                <div className={`${styles.jobContainer} ${styles.jobContainerActive}`}>
                    <div className={styles.textInfo} onClick={changeDisplay} >
                        <span>{job.title}</span>
                        <div>
                            <span>{job.location}</span>
                            <span>-</span>
                            <span>{job.type}</span>
                        </div>
                    </div>
                    <img src={job.company_logo} alt={job.company}></img>
                </div>
                <div className={styles.detailsContainer}>
                    <h3>Description:</h3>
                    <div className={styles.detailContent}>
                        <ReactMarkdown source={job.description} />
                    </div>
                </div>
                </>
            ):(
            <>
                <div className={styles.jobContainer}>
                    <div className={styles.textInfo} onClick={changeDisplay}>
                        <span>{job.title}</span>
                        <div>
                            <span>{job.location}</span>
                            <span> - </span>
                            <span>{job.type}</span>
                        </div>
                    </div>
                    <img src={job.company_logo} alt={job.company}></img>
                </div>
            </>
            )}
        </>
    )
}