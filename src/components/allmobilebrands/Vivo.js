import React from 'react'
import { Link } from 'react-router-dom'
import { VIVOMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Vivo = () => {
    return ( <
        >
        <
        div className = 'mobile-vivo-section' >
        <
        div className = 'container-fluid mobile-vivo-container' >
        <
        div className = 'mobile-vivo-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-vivo-row' >
        <
        div className = 'mobile-vivo-items' > {
            VIVOMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-vivo-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-vivo-title text-center' > { mobiles.title } < /div> <
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

export default Vivo