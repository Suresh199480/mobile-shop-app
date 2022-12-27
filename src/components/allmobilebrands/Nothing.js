import React from 'react'
import { Link } from 'react-router-dom'
import { NothingMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'

const Nothing = () => {
    return ( <
        >
        <
        div className = 'mobile-nothing-section' >
        <
        div className = 'container-fluid mobile-nothing-container' >
        <
        div className = 'mobile-nothing-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-nothing-row' >
        <
        div className = 'mobile-nothing-items' > {
            NothingMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-nothing-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-nothing-title text-center' > { mobiles.title } < /div> <
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

export default Nothing