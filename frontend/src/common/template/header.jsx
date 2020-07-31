import React from 'react'
import NavBar from './navbar'
import { Link } from 'react-router-dom'

export default props => (
    <header className="main-header">

        <Link to="" className="logo">
            <span className="logo-mini"></span>
            <span className="logo-sm">
                <i className="fa fa-laptop"></i>
                <b> My</b> Money
            </span>
        </Link>
        <nav className="navbar navbar-static-top">
            <Link to="" className="sidebar-toggle" data-toggle="offcanvas"></Link>
            <NavBar/>
        </nav>
    </header>
)