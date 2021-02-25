import styles from "../styles/components/Filter.module.css"

export function Filter(){
    return(
        <div className={styles.descContainer}>
            <label>Job Description</label>
            <input type="text" placeholder="Job Description"></input>
        </div>
    )
}