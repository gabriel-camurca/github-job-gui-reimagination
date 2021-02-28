import { useContext, useState } from "react";
import { JobCard } from "./JobCard";

import  allJobs from "../../jobs.json"
import axios from "axios";
import { FilterContext } from "../contexts/FilterContext";

export function JobsList(){

    const {loc, desc, isChecked} = useContext(FilterContext);

    const [jobs, setJobs] = useState(allJobs);


    axios.get('https://jobs.github.com/positions.json',
    {   params: {markdown: true, location: loc, description: desc, full_time: isChecked},
        headers: {'Access-Control-Allow-Origin' : '*', 'Accept' : 'text/plain'}
    }).then(res => setJobs(res.data)).catch(e => {console.log(e)})

    // return(
    //     <div style={{display:"flex",flexDirection:"column" ,justifyContent: "space-evenly", alignItems: "center" }}>
    //         {jobs.map(item => {
    //           if(String(item.description).toLowerCase().includes(desc) && String(item.location).toLowerCase().includes(loc)){
    //             return <JobCard key={item.id} job={item} />
    //             }
    //           })
    //         }
    //     </div>
    // );

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