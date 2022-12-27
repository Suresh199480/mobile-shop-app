import React from 'react'
import { Link } from 'react-router-dom'
import { IQOOMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Iqoo = () => {
    return ( <
        >
        <
        div className = 'mobile-iqoo-section' >
        <
        div className = 'container-fluid mobile-iqoo-container' >
        <
        div className = 'mobile-iqoo-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-iqoo-row' >
        <
        div className = 'mobile-iqoo-items' > {
            IQOOMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-iqoo-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-iqoo-title text-center' > { mobiles.title } < /div> <
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

export default Iqoo