import React from "react"

import "./Header.css"
import reactLogo from "./assets/images/react-logo.png"

export default function Header() {
    console.log("bruh")
    return (
      <header>
        <nav className="navbar">
          <img src={reactLogo} alt="Logo" width="40px"/>
  
          <ul className="navbar-items">
            <li className="navbar-item">Pricing</li>
            <li className="navbar-item">About</li>
            <li className="navbat-item">Contact</li>
          </ul>
        </nav>
      </header>
    )
}