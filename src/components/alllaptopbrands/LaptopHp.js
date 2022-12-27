import React from 'react'
import { Link } from 'react-router-dom'
import { HpLaptop } from '../../Data'
import FooterSec from '../footer/FooterSec'


const LaptopHp = () => {
    return ( <
        >
        <
        div className = 'laptop-hp-section' >
        <
        div className = 'container-fluid laptop-hp-container' >
        <
        div className = 'laptop-hp-heading text-center' > Select Your Device < /div> <
        div className = 'row laptop-hp-row' >
        <
        div className = 'laptop-hp-items' > {
            HpLaptop.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'laptop-hp-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'laptop-hp-title text-center' > { mobiles.title } < /div> <
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

export default LaptopHp