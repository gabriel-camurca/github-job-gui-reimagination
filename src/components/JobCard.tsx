import { useContext, useState } from "react"
import styles from "../styles/components/JobCard.module.css"

import { JobsContext } from "../contexts/JobsContext"

export function JobCard(){
    // function test(){
    //     console.log("It Works!");
    // }

    const {uniqueJob, getJob} = useContext(JobsContext);

    const [isActive, setIsActive] = useState(false);

    function changeDisplay(){
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }
    return(
        <>
            {isActive ? (
                <>
                <div className={`${styles.jobContainer} ${styles.jobContainerActive}`}>
                    <div onClick={changeDisplay}>
                        <span>{uniqueJob.title}</span>
                        <div>
                            <span>{uniqueJob.location} - </span>
                            <span>{uniqueJob.type}</span>
                        </div>
                    </div>
                    <img src="icons/generic.svg"></img>
                </div>
                <div className={styles.detailsContainer}>
                    <h3>Descrição:</h3>
                    <span>{uniqueJob.description}</span>
                </div>
                </>
            ):(
            <>
                <div className={styles.jobContainer}>
                    <div onClick={changeDisplay}>
                        <span>{uniqueJob.title}</span>
                        <div>
                            <span>{uniqueJob.location} - </span>
                            <span>{uniqueJob.type}</span>
                        </div>
                    </div>
                    <img src="icons/generic.svg"></img>
                </div>
            </>
            )}
        </>
    )
}