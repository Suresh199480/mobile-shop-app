import React from 'react'
import { Link } from 'react-router-dom'
import { AcerLaptop } from '../../Data'
import FooterSec from '../footer/FooterSec'


const LaptopAcer = () => {
    return ( <
        >
        <
        div className = 'laptop-acer-section' >
        <
        div className = 'container-fluid laptop-acer-container' >
        <
        div className = 'laptop-acer-heading text-center' > Select Your Device < /div> <
        div className = 'row laptop-acer-row' >
        <
        div className = 'laptop-acer-items' > {
            AcerLaptop.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'laptop-acer-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'laptop-acer-title text-center' > { mobiles.title } < /div> <
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

export default LaptopAcer