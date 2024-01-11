//import {component} from "react";
import React,  { useState } from 'react';
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
//import {Link} from "react-router-dom"


function Navbar(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Food Link</h1>

                <div className="menu-icons" onClick={handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                         <li key={index}>
                            <a className={item.cName} href="/#">
                            <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                        )
                    })}
                    <button>Sign In</button>
                </ul>
            </nav>
        )
    }

export default Navbar;