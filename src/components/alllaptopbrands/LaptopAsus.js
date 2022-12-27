import React from 'react'
import { Link } from 'react-router-dom'
import { AsusLaptop } from '../../Data'
import FooterSec from '../footer/FooterSec'


const LaptopAsus = () => {
    return ( <
        >
        <
        div className = 'laptop-asus-section' >
        <
        div className = 'container-fluid laptop-asus-container' >
        <
        div className = 'laptop-asus-heading text-center' > Select Your Device < /div> <
        div className = 'row laptop-asus-row' >
        <
        div className = 'laptop-asus-items' > {
            AsusLaptop.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'laptop-asus-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'laptop-asus-title text-center' > { mobiles.title } < /div> <
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

export default LaptopAsus