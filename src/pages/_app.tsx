import { JobsProvider } from '../contexts/JobsContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <JobsProvider>
      <Component {...pageProps} />
    </JobsProvider>
  )
}

export default MyApp
