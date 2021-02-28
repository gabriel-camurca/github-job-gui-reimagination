import { useContext, useState } from "react";
import { JobCard } from "./JobCard";
import styles from "../styles/components/JobsList.module.css"

import  allJobs from "../../jobs.json"
import axios from "axios";
import { FilterContext } from "../contexts/FilterContext";

export function JobsList(){

    const {loc, desc, isChecked} = useContext(FilterContext);

    const [jobs, setJobs] = useState(allJobs);

    const [jobsFetched, setJobsFetched] = useState([]);

    // https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json
    // , {params: {markdown:true}}
    // axios.get('https://jobs.github.com/positions.json',
    // {   params:{ markdown: true},
    //     headers: {'Access-Control-Allow-Origin' : '*', 'Accept' : 'text/plain'}
    // }).then(res => console.log(res.data)).catch(e => {console.log(e)});

    return(
        <div style={{display:"flex",flexDirection:"column" ,justifyContent: "space-evenly", alignItems: "center" }}>
            {jobs.map(item => {
              if(String(item.description).toLowerCase().includes(desc) && String(item.location).toLowerCase().includes(loc)){
                  if(isChecked==true){
                      if(String(item.type).toLowerCase()=="full time"){
                        return <JobCard key={item.id} job={item} />
                      }
                    }else{
                        return <JobCard key={item.id} job={item} />
                    }
                }
              })
            }
        </div>
    );
}