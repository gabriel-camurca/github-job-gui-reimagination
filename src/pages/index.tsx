import Head from 'next/head'

import { JobsList } from '../components/JobsList'
import { FilterList } from '../components/FilterList'

export default function Home() {

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
          <JobsList />
        </div>
      </section>

      <section>
        <div>

        </div>
      </section>

    </div>
  );
}
