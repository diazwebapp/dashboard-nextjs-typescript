import Head from 'next/head'
import {Header} from '../../components/Header'
 
const Dashboard = () => {
  
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
        <main className='mt-5 mx-3' >
          <div className="table-responsive shadow">
            <div className="d-flex justify-content-between bg-white my-3">
              <div className="dropdown ms-5">

                <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  accion
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                
              </div>
              <div className="row">
                <div className="col-6">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary">Crear factura</button>
                </div>
              </div>
            </div>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2} >Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

          </div>
  
      </main>
  </>
}

export default Dashboard