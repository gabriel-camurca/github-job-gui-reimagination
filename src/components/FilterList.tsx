import styles from "../styles/components/FilterList.module.css"
import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";


export function FilterList(){

    const {changeDesc, changeLoc, desc} = useContext(FilterContext)

    function searchFor(){
        const localDesc = String((document.getElementById("descFilter") as HTMLInputElement).value).toLowerCase();
        const localloc = String((document.getElementById("locFilter") as HTMLInputElement).value).toLowerCase();
        changeDesc(localDesc);
        changeLoc(localloc);
    }

    return(
        <div className={styles.outerContainer}>
            <div className={styles.listingContainer}>
                <div className={styles.descContainer}>
                    <label>Job Description</label>
                    <input type="text" placeholder="Filter by title, benefits, companies, expertise" id="descFilter"></input>
                </div>
                <div className={styles.descContainer}>
                    <label>Location</label>
                    <input type="text" placeholder="Filter by city, state, zip code or country" id="locFilter"></input>
                </div>
            </div>
            <div className={styles.searchButtonContainer}>
                <button type="button" className={styles.searchButton} onClick={searchFor}>Procurar</button>
            </div>
        </div>
    )
}