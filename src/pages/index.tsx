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

      <div className="Title" style={ { margin: "4rem 0 0 10%", fontSize: "5rem" } }>
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
