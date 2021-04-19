import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

export function Navbar() {
    const links = [
        {to: '/home', label: 'Home', exact: true},
        {to: '/characters', label: 'Characters', exact: false},
        {to: '/locations', label: 'Locations', exact: false}
    ]

    return (
        <>
            <header className={classes.Navbar}>
                <NavLink to="/" className={classes.logo}>
                    <img src="../public/logo-rick-morty.jpg" alt=""/>
                </NavLink>
                <ul>
                    {
                        links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink
                                        to={link.to}
                                        exact={link.exact}
                                        activeClassName={classes.active}
                                    >{link.label}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </header>
        </>
    )
}
