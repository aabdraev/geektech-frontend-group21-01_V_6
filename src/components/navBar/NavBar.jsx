import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='navBar'>
            <nav>
                <ul className='navBar__links'>
                    <li>
                        <NavLink to={"/"}>
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar