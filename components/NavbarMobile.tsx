import {PropsWithChildren} from 'react'
import Image from "next/image";


export const NavbarMobile = (props:PropsWithChildren) => {
  
    return (
        <nav className="offcanvas offcanvas-start" data-bs-theme="dark" data-bs-backdrop="static" id="mobileNav" aria-labelledby="mobileNavLabel">

            <div className="offcanvas-header">
              <div>

                  <Image width={30} height={30} placeholder="empty" src="/logo.png" alt="logo" /> 
                  <b className="text-uppercase ms-3" >Dashboard</b>

              </div>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <small>Apps & pages</small>
              {props.children}
            </div>

        </nav>
    )
}