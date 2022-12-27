import React from 'react'
import { Link } from 'react-router-dom'
import { DellLaptop } from '../../Data'
import FooterSec from '../footer/FooterSec'


const LaptopDell = () => {
    return ( <
        >
        <
        div className = 'laptop-dell-section' >
        <
        div className = 'container-fluid laptop-dell-container' >
        <
        div className = 'laptop-dell-heading text-center' > Select Your Device < /div> <
        div className = 'row laptop-dell-row' >
        <
        div className = 'laptop-dell-items' > {
            DellLaptop.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'laptop-dell-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'laptop-dell-title text-center' > { mobiles.title } < /div> <
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

export default LaptopDell