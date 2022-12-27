import React from 'react'
import { Link } from 'react-router-dom'
import { PocoMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'

const Poco = () => {
    return ( <
        >
        <
        div className = 'mobile-poco-section' >
        <
        div className = 'container-fluid mobile-poco-container' >
        <
        div className = 'mobile-poco-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-poco-row' >
        <
        div className = 'mobile-poco-items' > {
            PocoMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-poco-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-poco-title text-center' > { mobiles.title } < /div> <
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

export default Poco