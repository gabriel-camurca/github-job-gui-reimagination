import Head from 'next/head'

import { JobCard } from "../components/JobCard";
import { FilterList } from '../components/FilterList'

import  allJobs from "../../jobs.json"
import { useContext, useState } from 'react';
import { FilterContext, FilterProvider } from '../contexts/FilterContext';

export default function Home() {

  const {loc, desc} = useContext(FilterContext);

  // var a = allJobs.filter(function(item){
  //   return item.location.includes(`${loc}`);
  // })

  const [jobs, setJobs] = useState(allJobs);

  return (
    <div>

      <Head>
        <title>
          Início | GitHub Jobs
        </title>
      </Head>

      <div className="Title" style={ { display:"flex", justifyContent:"center", marginTop: "6rem", fontSize: "7rem" } }>
        <p>Jobs</p>
      </div>

      <section>
        <div className="Filters">
          <FilterList></FilterList>
        </div>
      </section>

      <section>
        <div>
          {/* <JobsList /> */}
          <div style={{display:"flex",flexDirection:"column" ,justifyContent: "space-evenly", alignItems: "center" }}>
            {jobs.map(item => {
              if(String(item.description).toLowerCase().includes(desc) && String(item.location).toLowerCase().includes(loc)){
                return <JobCard key={item.id} job={item} />}
              })
            }
          </div>
        </div>
      </section>

      <section>
        <div>

        </div>
      </section>

    </div>
  );
}
