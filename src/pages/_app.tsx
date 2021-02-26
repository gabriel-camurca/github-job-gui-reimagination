import NavbarComp from '../components/NavbarComp'
import { JobsProvider } from '../contexts/JobsContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavbarComp></NavbarComp>

    <JobsProvider>
      <Component {...pageProps} />
    </JobsProvider>
    </>
  )
}

export default MyApp
