import { Icon } from "@iconify-icon/react";

export const Header = () => {
    return (
      <header className="p-3">
      <nav className="navbar bg-body-tertiary border rounded shadow-sm">
        <div className="container-fluid">
          <button className="btn btn-outline-light text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div>
            <span className="mx-2"><i className="bi bi-sun"></i></span>
            <span className="mx-2"><Icon icon="ant-design:appstore-add-outlined" /></span>
            <span className="mx-2"><Icon icon="codicon:bell-dot" /></span>
          </div>

          <div className="offcanvas offcanvas-start"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">erp alvaro</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              listado de herramientas
            </div>
          </div>
        </div>
      </nav>
    </header>
    )
}