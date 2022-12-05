import React from 'react'
import { NavLink } from "react-router-dom"

export function NavBar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div className="container px-6">
        <a className="navbar-brand fw-bold" href="/Home">InstaYa</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <div className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item">
                    <NavLink  style={
                        ({ isActive})=>({color: isActive ? 'blue' : 'black'})}  
                    className="nav-link me-lg-3 " to="/Home">Home</NavLink></li>
                <li className="nav-item">
                    <NavLink  style={
                        ({ isActive})=>({color: isActive ? 'blue' : 'black'})}  
                    className="nav-link me-lg-3 " to="/Login">Ingresar</NavLink></li>
                <li className="nav-item">
                    <NavLink  style={
                        ({ isActive})=>({color: isActive ? 'blue' : 'black'})} 
                        className="nav-link me-lg-3 " to="/Register">Registrar</NavLink></li>   
                <li className="nav-item">
                    <NavLink  style={
                        ({ isActive})=>({color: isActive ? 'blue' : 'black'})} 
                        className="nav-link me-lg-3 " to="/ListarSolicitud">Listar Pedidos</NavLink></li>
                
            </div>
        </div>
    </div>
</nav>
   
</>
    )
}
