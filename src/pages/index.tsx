import {useState} from 'react'

import { Container } from 'react-bootstrap'

import styles from '../styles/pages/Home.module.css'

import Search from "../components/Search"

import axios from "axios"



import Head from 'next/head'
import { JobCard } from '../components/JobCard'

export default function Home() {
  return (
    <div>

      <Head>
        <title>
          Início | GitHub Jobs
        </title>
      </Head>

      <div className="Title">
        <p>Jobs</p>
      </div>

      <section>
        <div className="Filters">
          <input type="text" id="filterDescription" name="fdname"/> <br/>  
          <input type="text" id="filterLocation" name="flname"/> <br/>  
        </div>
      </section>

      <section>
        <div>
          <JobCard />
        </div>
      </section>

    </div>
  );
}
