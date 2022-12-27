import React from 'react'
import { Link } from 'react-router-dom'
import { RealMeMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Realme = () => {
    return ( <
        >
        <
        div className = 'mobile-realme-section' >
        <
        div className = 'container-fluid mobile-realme-container' >
        <
        div className = 'mobile-realme-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-realme-row' >
        <
        div className = 'mobile-realme-items' > {
            RealMeMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-realme-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-realme-title text-center' > { mobiles.title } < /div> <
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

export default Realme