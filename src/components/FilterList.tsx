import { Filter } from "./Filter";

import styles from "../styles/components/FilterList.module.css"

export function FilterList(){
    return(
        <div className={styles.outerContainer}>
            <div className={styles.listingContainer}>
                <Filter />
                <Filter />
            </div>
            <div className={styles.searchButtonContainer}>
                <button type="button" className={styles.searchButton}>Procurar</button>
            </div>
        </div>
    )
}