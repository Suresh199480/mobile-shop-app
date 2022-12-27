import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    return ( <
        div className = 'navbar' >
        <
        Link to = "/"
        className = 'logo' > < img src = 'https://plsadaptive.s3.amazonaws.com/gmedia/png/emseventlogo/_i_36a71288e442e3ce8aaa9ecf4afdaae3_mobileShopping_vertical_Notagline.png'
        alt = '' / > < /Link> <
        div className = { click ? "nav-menu nav-menu-active" : "nav-menu" }
        onClick = {
            () => setClick(false) } >
        <
        li className = 'nav-item' >
        <
        Link to = "/mobile"
        className = 'nav-link' > Phone < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = "/tablet"
        className = 'nav-link' > Tablet < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = "/laptop"
        className = 'nav-link' > Laptop < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = "/watch"
        className = 'nav-link' > Watch < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = "/blog"
        className = 'nav-link' > Blog < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = "/partner"
        className = 'nav-link' > Be Partner < /Link> <
        /li> <
        /div> <
        div className = { click ? "hamburger hamburger-toggle" : "hamburger" }
        onClick = {
            () => setClick(!click) } >
        <
        div className = 'line-1' > < /div> <
        div className = 'line-2' > < /div> <
        div className = 'line-3' > < /div> <
        /div> <
        /div>
    )
}

export default Navbar