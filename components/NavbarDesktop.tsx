import {PropsWithChildren} from 'react'


export const NavbarDesktop = (props:PropsWithChildren) => {
  
    return (
        <nav className='d-flex justify-content-around' >
             {props.children}
        </nav>
    )
}