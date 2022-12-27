import React from 'react'
import { Link } from 'react-router-dom'
import { SamsungMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Samsung = () => {
    return ( <
        >
        <
        div className = 'mobile-samsung-section' >
        <
        div className = 'container-fluid mobile-samsung-container' >
        <
        div className = 'mobile-samsung-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-samsung-row' >
        <
        div className = 'mobile-samsung-items' > {
            SamsungMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-samsung-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-samsung-title text-center' > { mobiles.title } < /div> <
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

export default Samsung