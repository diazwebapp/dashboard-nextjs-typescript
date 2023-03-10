import Head from 'next/head'
import { GetServerSideProps } from 'next'
import {jwtVerify} from 'jose'

const Index = () => {
  
  return <main>
    <Head>
      <title>welcome to erp</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="erp" />

      {/** OG META */}
      <meta property="og:title" content="welcome to erp" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="erp" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={process.env.DOMAIN} />
      <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="welcome to erp" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="erp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="3 minutos" />
      {/**LINK META INDEX*/}
      <link rel="shortlink" href={process.env.DOMAIN} />
      <link rel="canonical" href={process.env.DOMAIN} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="ia:markup_url" content={process.env.DOMAIN} />
      
    </Head>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </main>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {session} = context.req.cookies
  const secret = new TextEncoder().encode(
     'secret',
     )
  if(session !== undefined){
     try{
         await jwtVerify(session,secret)
         return {
             redirect: {
               permanent: false,
               destination: "/dashboard",
             },
             props:{},
           };
       }catch(err){
        return {
          redirect: {
            permanent: false,
            destination: "/login",
          },
          props:{},
        };
       }
  }
  
  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
    props:{},
  };
  
 }

export default Index