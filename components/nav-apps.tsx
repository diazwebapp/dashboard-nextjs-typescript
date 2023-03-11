import { PropsWithChildren } from "react"

const NavAppList = ({mobile}:PropsWithChildren<{mobile?:boolean}>)=>{
    return(
        <>
           <div>
                <i className="bi bi-envelope-at text-bold me-2" style={{fontSize:20}}></i>
                emails
           </div>
           <div>
                
                <i className="bi bi-chat-left-dots me-2" style={{fontSize:20}}></i>
                chat
            </div>
           <div>
            <i className="bi bi-calendar3 me-2" style={{fontSize:20}}></i>
                calendar
            </div>
            {
                mobile ? (
                    <div className="accordion ">

                        <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#invoice-list" aria-expanded="false" aria-controls="invoice-list">
                        <i className="bi bi-receipt-cutoff me-2" style={{fontSize:20}}></i>
                            invoice
                        </button>

                        <div id="invoice-list" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p><i className="bi bi-circle align-middle" style={{fontSize:8}}></i> list</p>
                                <p><i className="bi bi-circle align-middle" style={{fontSize:8}}></i> Add</p>
                            </div>
                        </div>
                            
                </div>
                ):(
                    <div className="dropdown" >
                        <button type="button" className="btn btn-info dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                            invoice
                        </button>
                        <ul className="dropdown-menu px-2">
                            <p><i className="bi bi-circle align-middle" style={{fontSize:8}}></i> list</p>
                            <p><i className="bi bi-circle align-middle" style={{fontSize:8}}></i> Add</p>
                        </ul>
                    </div>

                )
            }
           
      </>
    )
}

export default NavAppList