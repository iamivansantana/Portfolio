import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarComponents.css'

const NavBarComponents = ({ruta}) => {
 
    return (
        <>
        <div className="navbar-background">
            <div className="navbar-fixed">
                <nav className="navbar">   
                    <div className="navbar-left">
                        
                            <Link to="/" className="btn-none" style={{textDecoration:'none'}}>
                                <i className="fa fa-home icon"></i>
                            </Link>
                    </div>

                    <div className="navbar-center">
                        <div >
                            <Link to={ruta}><img src="/assets/buhuhuwhite.png" className="navbarLogo img" alt="LogoPortadaBuhuhu" /></Link>
                        </div>
                    </div>
                    <div className="navbar-right">

                    </div>

                </nav>
            </div>  
        </div>
            
        </>
    )
}

export default NavBarComponents;
