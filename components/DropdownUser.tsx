import Image from "next/image"
import { useContext } from "react"
import { ErpContext } from "../context/erp"

export const DropdownUser = () => {
    const {logout,erpState:{user}} = useContext(ErpContext)
    const closeApp = async (e:any)=>{
        e.target.textContent = "..."
        await logout()
        e.target.textContent = 'Logout'
    }
    return (
        <nav className='d-flex justify-content-end'  >
             <button className="btn me-2"><i className="bi bi-boxes" style={{fontSize:20}} ></i></button>
             <button className="btn me-2"><i className="bi bi-bell" style={{fontSize:20}} ></i></button>
             <div className="dropdown" >
                <button type="button" className="btn dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image width={40} height={40} src="/img/1.png" alt="profile" style={{borderRadius:"50%"}} className="me-2" />
                </button>
                <ul className="dropdown-menu" style={{minWidth:250}}>
                    <div className="d-flex border-bottom p-3">
                        <Image width={40} height={40} src="/img/1.png" alt="profile" style={{borderRadius:"50%"}} className="me-2" />
                        <b className="text-start">
                            {user?user.name:'no user'} <br/>
                            <small className="text-muted" >roll</small>
                        </b>
                        
                    </div>
                    <div className="px-3">

                        <a href="#" className="d-block text-decoration-none text-muted mt-2" ><i className="bi bi-person-check" style={{fontSize:20}} ></i> My profile</a>
                        <a href="#" className="d-block text-decoration-none text-muted mt-2"><i className="bi bi-gear" style={{fontSize:20}} ></i> Settings</a>
                        <a href="#" onClick={(e)=>closeApp(e)} className="d-block text-decoration-none text-muted mt-2"><i className="bi bi-box-arrow-right" style={{fontSize:20}} ></i> Logout</a>

                    </div>
                </ul>
            </div>
        </nav>
    )
}