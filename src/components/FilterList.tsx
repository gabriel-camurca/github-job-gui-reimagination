import { Filter } from "./Filter";

import styles from "../styles/components/FilterList.module.css"

export function FilterList(){
    return(
        <div className={styles.outerContainer}>
            <div className={styles.listingContainer}>
                <Filter 
                label={"Job Description"}
                plcHolder={"Filter by title, benefits, companies, expertise"}
                />
                <Filter
                label={"Location"}
                plcHolder={"Filter by city, state, zip code or country"}
                />
            </div>
            <div className={styles.searchButtonContainer}>
                <button type="button" className={styles.searchButton}>Procurar</button>
            </div>
        </div>
    )
}