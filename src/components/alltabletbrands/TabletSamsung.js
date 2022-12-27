import React from 'react'
import { Link } from 'react-router-dom'
import { SamsungTablets } from '../../Data'
import FooterSec from '../footer/FooterSec'
const TabletSamsung = () => {
    return ( <
        >
        <
        div className = 'tablet-samsung-section' >
        <
        div className = 'container-fluid tablet-samsung-container' >
        <
        div className = 'tablet-samsung-heading text-center' > Select Your Device < /div> <
        div className = 'row tablet-samsung-row' >
        <
        div className = 'tablet-samsung-items' > {
            SamsungTablets.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'tablet-samsung-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'tablet-samsung-title text-center' > { mobiles.title } < /div> <
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

export default TabletSamsung