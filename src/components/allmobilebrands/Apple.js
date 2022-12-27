import React from 'react'
import { Link } from 'react-router-dom'
import { AppleMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'


const Apple = () => {
    return ( <
        >
        <
        div className = 'mobile-apple-section' >
        <
        div className = 'container-fluid mobile-apple-container' >
        <
        div className = 'mobile-apple-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-apple-row' >
        <
        div className = 'mobile-apple-items' > {
            AppleMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-apple-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-apple-title text-center' > { mobiles.title } < /div> <
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

export default Apple