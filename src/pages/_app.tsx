import React from 'react'
import NavbarComp from '../components/NavbarComp'
import { FilterProvider } from '../contexts/FilterContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavbarComp></NavbarComp>

    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
    </>
  )
}

export default MyApp
