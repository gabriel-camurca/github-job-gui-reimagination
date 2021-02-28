import styles from "../styles/components/FilterList.module.css"
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";


export function FilterList(){

    const {changeDesc, changeLoc, changeIsChecked} = useContext(FilterContext)

    function searchFor(){
        const localDesc = String((document.getElementById("descFilter") as HTMLInputElement).value).toLowerCase();
        const localloc = String((document.getElementById("locFilter") as HTMLInputElement).value).toLowerCase();
        if((document.getElementById("fullTimeCheckbox") as HTMLInputElement).checked == true){
            changeIsChecked(true)
        } else {
            changeIsChecked(false);
        }
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
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="fullTimeCheckbox"></input>
                <label htmlFor="fullTimeCheckbox" className={styles.checkBoxLabel}>Full Time Only</label>
            </div>
        </div>
    )
}