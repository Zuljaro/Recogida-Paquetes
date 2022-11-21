import React from 'react'

export function NavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div className="container px-6">
        <a className="navbar-brand fw-bold" href="#page-top">InstaYa</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3" href="#Login">Ingresar</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="#register">Registrar</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Portafolio</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Mi Cuenta</a></li>
            </ul>
            
        </div>
    </div>
    </nav>
    )
}
