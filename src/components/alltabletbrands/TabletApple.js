import React from 'react'
import { Link } from 'react-router-dom'
import FooterSec from '../footer/FooterSec'
import { AppleTablets } from '../../Data'


const TabletApple = () => {
    return ( <
        >
        <
        div className = 'tablet-apple-section' >
        <
        div className = 'container-fluid tablet-apple-container' >
        <
        div className = 'tablet-apple-heading text-center' > Select Your Device < /div> <
        div className = 'row tablet-apple-row' >
        <
        div className = 'tablet-apple-items' > {
            AppleTablets.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'tablet-apple-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'tablet-apple-title text-center' > { mobiles.title } < /div> <
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

export default TabletApple