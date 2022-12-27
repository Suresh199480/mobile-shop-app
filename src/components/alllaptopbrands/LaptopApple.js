import React from 'react'
import { Link } from 'react-router-dom'
import { AppleLaptop } from '../../Data'
import FooterSec from '../footer/FooterSec'

const LaptopApple = () => {
    return ( <
        >
        <
        div className = 'laptop-apple-section' >
        <
        div className = 'container-fluid laptop-apple-container' >
        <
        div className = 'laptop-apple-heading text-center' > Select Your Device < /div> <
        div className = 'row laptop-apple-row' >
        <
        div className = 'laptop-apple-items' > {
            AppleLaptop.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'laptop-apple-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'laptop-apple-title text-center' > { mobiles.title } < /div> <
                /div> <
                /Link>
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        FooterSec / >
        <
        />
    )
}

export default LaptopApple