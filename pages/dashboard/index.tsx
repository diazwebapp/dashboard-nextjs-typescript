import Head from 'next/head'
import {Header} from '../../components/Header'
import {Icon} from '@iconify-icon/react'
import { forwardRef, useEffect, useState } from 'react'
import getTenantsController from '../../utils/get-tenants-controller'
import { Users } from '../../fakedb/users'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export type DateType = Date | null | undefined

const Dashboard = () => {
  const [tenants,setTenants] = useState<Users>([])
  const [startDate,setStartDate] = useState<DateType>(new Date())
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const sets = async()=>{
    const rs = await getTenantsController()
    setTenants(rs)
  }


  useEffect(()=>{
    sets()
  },[])

  const ExampleCustomInput = forwardRef<any>(({ value, onClick }:any, ref:any) => (
    <button className="btn btn-outline-light text-muted w-100 border rounded text-center" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return <>
        <Head>
          <title>Dashboard</title>
          <meta name="author" content="diaz web app" />
          <meta name="description" content="" />

          {/** OG META */}
          <meta property="og:title" content="Dashboard" />
          <meta property="og:site_name" content={'diaz web app'} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:url" content={process.env.DOMAIN} />
          <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
          <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
          <meta property="og:image:width" content="320" />
          <meta property="og:image:height" content="240" />
          {/**TWITTER META */}
          <meta name="twitter:title" content="Dashboard" />
          <meta name="twitter:site" content="@diazwebapp" />
          <meta name="twitter:description" content="" />
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
        <main className='mt-5' >
          <div className="row border m-2 rounded text-muted p-4">
            <div className="col-12">
              <p className='display-6' >Filter</p>
            </div>
            <div className="col-md-6">
                <button className="btn text-muted border btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  invoice status
                </button>
                <ul className="dropdown-menu">
                    <button className='btn btn-outline-dark border-0 d-block w-100'>paid</button>
                    <button className='btn btn-outline-dark border-0 d-block w-100'>failed</button>
                    <button className='btn btn-outline-dark border-0 d-block w-100'>canceled</button>
                </ul>
            </div>
             
            <div className="col-md-6">
              
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={startDate}
              onChange={(date)=>onChange(date)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              monthsShown={2}
              customInput={<ExampleCustomInput />}
            />

            </div>
          </div>
          <div className="table-responsive row rounded border m-2" style={{minHeight:200}}>
            <div className="d-flex justify-content-between bg-white my-3">
              <div className="dropdown ms-5">

                <button className="btn text-muted border px-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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


            <table  className="table align-middle w-100 table-nowrap mb-2 border ">
              <thead className="table-light">
                <tr>
                  <td className="text-muted " style={{maxWidth:20}}>
                      <div className="form-check border-end text-center">

                        <input className="form-check-input float-none" type="checkbox" />
                
                      </div>
                  </td>
                  <td className='text-muted '><span className='border-end d-block'>ID</span></td>
                  <td className='text-muted '><span className='border-end d-block'>Client</span></td>
                  <td className='text-muted '><span className='border-end d-block'>Total</span></td>
                  <td className='text-muted '><span className='border-end d-block'>Order date</span></td>
                  <td className='text-muted'>Options</td>
                </tr>
              </thead>
              <tbody>
                {
                  tenants.length > 0 ?(
                    tenants.map(tenant=>(
                      <tr>
                  <td style={{maxWidth:20}}>
                    <div className="form-check text-center">

                      <input className="form-check-input float-none" type="checkbox" />

                    </div>
                  </td>
                  <td>
                    <span className="text-info">#{tenant.id}</span>
                  </td>
                  <td className="text-middle">
                    <img src="/logo.png" alt="avatar" height="30" className="me-2"/>
                    <span className='text-muted'>{tenant.name}</span>
                  </td>
                  <td>
                    <span className="text-muted">$205.81</span>
                  </td>
                  <td> 
                    <Icon icon="material-symbols:edit-square-outline-rounded" className='me-2 text-muted' height={20}/>
                    <span className="text-muted" >03.26.2022</span>
                  </td>
                  <td>
                    <div className="d-block">

                      <span><Icon icon="ion:trash-outline" className='text-muted' height={25} /></span>
                      <span><Icon icon="mdi:eye-outline" className='text-muted' height={25}/></span>

                    </div>
                  </td>
                </tr>
                    ))
                  ):null
                }
              </tbody>
            </table>

          </div>
  
      </main>
  </>
}

export default Dashboard