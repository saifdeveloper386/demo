import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../src/components/Navbar';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
