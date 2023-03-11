import Image from 'next/dist/client/image'
import Head from 'next/head'
import { FormEvent, useContext } from 'react'
import { GetServerSideProps } from 'next'
import {jwtVerify} from 'jose'
import Link from 'next/link'
import { ErpContext } from '../../context/erp'


const Login = () => {
    const {login} = useContext(ErpContext)
    const loginUserController = async (e:FormEvent)=>{
        e.preventDefault()
        const {email, password,btn}:any = e.target
        if(email.value == '' || password.value == ''){
            return alert('rellene sus datos')
        }
        btn.disabled = true
        await login({email:email.value,password:password.value})
        btn.disabled = false
    }
    
  return <main>
    <Head>
      <title>Desarrollador de software - Diaz web app</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />

      {/** OG META */}
      <meta property="og:title" content="Desarrollador de software - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={process.env.DOMAIN} />
      <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Desarrollador de software - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
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
    <section className="container">
        <div className="row py-5">

            <div className="col-lg-7 lign-items-center bg-light d-none d-lg-flex">
                <img className='img-fluid' src="/img/auth-v2-login-illustration-light.png" />
            </div>
            <div className="col-lg-5  p-5">
                <div >
                    <Image width="40" height="40" src="/logo.png" alt='logo'/>
                    <p style={{fontSize:"1.5rem"}} className="text-muted font-weight-bold">Welcome to Vuexy! 👋🏻</p>
                    <p className="">Please sign-in to your account and start the adventure</p>
                </div>
                <form onSubmit={loginUserController}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control p-3" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <div className="row">
                            <div className="col-6">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="renemberme"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Renemberme?</label>
                            </div>
                            <div className="col-6">
                                <Link href="/register">Registrate</Link>
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary w-100" name="btn">Login</button>
                </form>
            </div>
        </div>
    </section>
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
            props: {},
            }
      }
 }
 
 return {
    props: {},
    }
 
}

export default Login