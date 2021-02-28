import Head from 'next/head'

import { JobCard } from "../components/JobCard";
import { FilterList } from '../components/FilterList'

import  allJobs from "../../jobs.json"
import { useContext, useState } from 'react';
import { FilterContext, FilterProvider } from '../contexts/FilterContext';
import { JobsList } from '../components/JobsList';

export default function Home() {

  return (
    <div>

      <Head>
        <title>
          Início | GitHub Jobs
        </title>
      </Head>

      <div className="Title" style={ { display:"flex", justifyContent:"center", marginTop: "6rem", color: "var(--white)",  fontSize: "7rem" } }>
        <p>Jobs</p>
      </div>

      <section>
        <div className="Filters">
          <FilterList></FilterList>
        </div>
      </section>

      <section>
          <JobsList></JobsList>
      </section>

    </div>
  );
}
