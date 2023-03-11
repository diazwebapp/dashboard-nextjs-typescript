import Image from 'next/dist/client/image'
import Head from 'next/head'
import { FormEvent } from 'react'
import { GetServerSideProps } from 'next'
import {jwtVerify} from 'jose'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Register = () => {
    const {push} = useRouter()
    const login = async(e:FormEvent):Promise<void> =>{
        e.preventDefault()
        const {email,password}:any = e.target
        let req = await fetch("/api/register",{
				method:"post",
				body:JSON.stringify({email:email.value,password:password.value}),
				headers:{
					"Content-Type":"application/json"
				}
			})
			if(req.status==200){
				const resp = await req.json()
                if(resp.status === "ok"){
                    push("/login")
                }
			}else{
				alert("verifique sus credenciales")
			}
    }
    
  return <main>
    <Head>
      <title>Register</title>      
    </Head>
    <section className="container">
        <div className="row py-5">

            <div className="col-lg-7 lign-items-center bg-light d-none d-lg-flex">
                <img className='img-fluid' src="/img/auth-v2-register-illustration-bordered-light.png" />
            </div>
            <div className="col-lg-5  p-5">
                <div >
                    <Image width="40" height="40" src="/logo.png" alt='logo'/>
                    <p style={{fontSize:"1.5rem"}} className="text-muted font-weight-bold">Adventure starts here 🚀</p>
                    <p className="">Make your app management easy and fun!</p>
                </div>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control p-3" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3 form-check">
                        <div className="row">
                            <div className="col-6">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="terms" required/>
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to privacy policy & terms</label>
                            </div>
                            <div className="col-6">
                                <Link href="/login">Ingresa</Link>
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
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

export default Register