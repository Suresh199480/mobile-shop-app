import React from 'react'
import { Link } from 'react-router-dom'
import { OPPOMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Oppo = () => {
    return ( <
        >
        <
        div className = 'mobile-oppo-section' >
        <
        div className = 'container-fluid mobile-oppo-container' >
        <
        div className = 'mobile-oppo-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-oppo-row' >
        <
        div className = 'mobile-oppo-items' > {
            OPPOMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-oppo-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-oppo-title text-center' > { mobiles.title } < /div> <
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

export default Oppo