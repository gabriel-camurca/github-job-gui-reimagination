import styles from "../styles/components/Filter.module.css"

interface FilterData{
    label: string;
    plcHolder: string;
}

export function Filter(props:FilterData){
    return(
        <div className={styles.descContainer}>
            <label>{props.label}</label>
            <input type="text" placeholder={props.plcHolder}></input>
        </div>
    )
}