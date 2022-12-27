import React from 'react'
import { Link } from 'react-router-dom'
import { RealmeTablets } from '../../Data'
import FooterSec from '../footer/FooterSec'


const TabletRealme = () => {
    return ( <
        >
        <
        div className = 'tablet-realme-section' >
        <
        div className = 'container-fluid tablet-realme-container' >
        <
        div className = 'tablet-realme-heading text-center' > Select Your Device < /div> <
        div className = 'row tablet-realme-row' >
        <
        div className = 'tablet-realme-items' > {
            RealmeTablets.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'tablet-realme-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'tablet-realme-title text-center' > { mobiles.title } < /div> <
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

export default TabletRealme