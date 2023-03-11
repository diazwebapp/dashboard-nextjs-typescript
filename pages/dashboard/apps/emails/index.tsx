import Head from 'next/head'
import { Header } from '../../../../components/Header'

 
const Emails = () => {
  
  return <>
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
        <Header />
        <main className='mt-5 mx-3 px-2' >
            <div className="border row">
                <div className="col-md-3 p-0">
                    <div className="text-center">
                        <button className="btn bg-info text-white px-4 mt-3">New message</button>
                        <div>
                            <button className="bg-white d-block w-100 px-1 text-start border-0 text-info">
                                <i className="bi bi-envelope me-2" style={{fontSize:20}}></i>
                                inbox 
                            </button>
                            <button className="bg-white border-0 d-block w-100 px-1 text-start text-muted">
                                <i className="bi bi-send me-2" style={{fontSize:20}}></i>
                                send 
                            </button>
                            <button className="bg-white border-0 d-block w-100 px-1 text-start text-muted">
                                <i className="bi bi-file-earmark me-2" style={{fontSize:20}}></i>
                                send 
                            </button>
                            <button className="bg-white border-0 d-block w-100 px-1 text-start text-muted">
                                <i className="bi bi-star me-2" style={{fontSize:20}}></i>
                                starred
                            </button>
                            <button className="bg-white border-0 d-block w-100 px-1 text-start text-muted">
                                <i className="bi bi-exclamation-circle me-2" style={{fontSize:20}}></i>
                                spam
                            </button>
                            <button className="bg-white border-0 d-block w-100 px-1 text-start text-muted">
                                <i className="bi bi-trash3 me-2" style={{fontSize:20}}></i>
                                trash
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 p-0 border-start">
                    <div className="d-block border-bottom">
                        <div className="input-group">
                            <span className="input-group-text px-4 border-0">@</span>
                            <div className="form-floating">
                                <input type="search" className="form-control border-0" placeholder="search emails" />
                            </div>
                        </div>
                    </div>
                    
                        <table className="table">
                            <thead>
                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}></td>
                                    <td></td>
                                    <td className='text-end'><i className="bi bi-arrow-clockwise me-2" style={{fontSize:20}}></i></td>
                                </tr>
                            </thead>
                            <tbody>
                                {/**AQUÍ VA EL CICLO */}
                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}><i className="bi bi-star text-secondary me-2" style={{fontSize:20}}></i></td>
                                    <td><b>nombre usuario</b> <span>asunto</span></td>
                                    <td className='text-end'>03:00</td>
                                </tr>




                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}><i className="bi bi-star text-warning me-2" style={{fontSize:20}}></i></td>
                                    <td><b>nombre usuario</b> <span>asunto</span></td>
                                    <td className='text-end'>03:00</td>
                                </tr>
                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}><i className="bi bi-star text-warning me-2" style={{fontSize:20}}></i></td>
                                    <td><b>nombre usuario</b> <span>asunto</span></td>
                                    <td className='text-end'>03:00</td>
                                </tr>
                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}><i className="bi bi-star text-secondary me-2" style={{fontSize:20}}></i></td>
                                    <td><b>nombre usuario</b> <span>asunto</span></td>
                                    <td className='text-end'>03:00</td>
                                </tr>
                                <tr className='text-muted bg-light'>
                                    <td style={{maxWidth:20}}>
                                        <div className="form-check text-center">

                                            <input className="form-check-input float-none" type="checkbox" />

                                            </div>
                                    </td>
                                    <td style={{maxWidth:20}}><i className="bi bi-star text-secondary me-2" style={{fontSize:20}}></i></td>
                                    <td><b>nombre usuario</b> <span>asunto</span></td>
                                    <td className='text-end'>03:00</td>
                                </tr>
                                {/**AQUÍ TERMONA CICLO */}
                            </tbody>
                        </table>
                </div>
            </div>
  
      </main>
  </>
}

export default Emails