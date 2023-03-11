import { AppProps } from "next/app";
import { useEffect } from "react";

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../theme/theme-1.css'
import { ErpProvider } from "../context/erpProvider";





function Myapp({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
  },[])

  return <>
    <Head>
    <meta name='application-name' content='Diaz web app' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='DWA' />
    <meta name='format-detection' content='telephone=yes' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='msapplication-TileColor' content='#2B5797' />
    <meta name='msapplication-tap-highlight' content='no' />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="/logo512.png"/>   
        <link rel='icon' type='image/png' sizes='512x512' href='/logo512.png' />     
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="rgb(15,15,15)" />
        <meta property="fb:pages" content="325128641454324" />
        <meta property="fb:app_id" content="539696167476713" />
      </Head>
      
     
        <ErpProvider>
          <Component {...pageProps}/>

        </ErpProvider>
        
  </>;
}

export default Myapp