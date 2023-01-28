import React from 'react'
import {HashLink as Link} from "react-router-hash-link"

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "FAQ",
            href: "/faq"
        }
    ]

  return (
    <div className='Nav'>
        <div className="logo"><h1>Nav</h1></div>
        <div className="navLinks">
            {navList.map((link) => {
                return(
                    <li>
                        <Link className="link" to={link.href}>{link.name}</Link>
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default Nav;