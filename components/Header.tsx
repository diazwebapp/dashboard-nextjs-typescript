import Image from "next/image";
import { useEffect, useState } from "react";
import { DropdownUser } from "./DropdownUser";
import NavAppList from "./nav-apps";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Header = () => {
  const [device,setDevice] = useState({width:900})
  useEffect(()=>{
    if(window){
      setDevice({width:window.innerWidth})
      window.addEventListener('resize',()=>{
          setDevice({width:window.innerWidth})
      })
    }
  },[])
    return (
      <header className={(device.width < 916 ? 'm-3 border rounded py-2': 'pt-3') + ' row m-0 sticky-top bg-white text-muted'}>
        <div className="col-4">
          {
            device.width < 916 ? (
              <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileNav" aria-controls="MobileNav">
                <i className="bi bi-list" style={{fontSize:20}} ></i>
              </button>
            ):(
              <div className="pt-2">
                <Image src="/logo.png" width={40} height={40} alt="logo" />
                <b className="ms-3" >ERP</b>
              </div>
            )
          }
          
        </div>
        <div className="col-8">
          <DropdownUser />
        </div>
        
        {
          device.width < 916 ? (
              <NavbarMobile>
                <NavAppList mobile={true} />
              </NavbarMobile>
          ):(
            <div className="col-12 py-2 border mt-3">
              <NavbarDesktop>
                <NavAppList />
              </NavbarDesktop>
            </div>
          )
        }
    </header>
    )
}