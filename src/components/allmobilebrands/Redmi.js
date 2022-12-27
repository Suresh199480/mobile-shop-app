import React from 'react'
import { Link } from 'react-router-dom'
import { MIMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Redmi = () => {
    return ( <
        >
        <
        div className = 'mobile-mi-section' >
        <
        div className = 'container-fluid mobile-mi-container' >
        <
        div className = 'mobile-mi-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-mi-row' >
        <
        div className = 'mobile-mi-items' > {
            MIMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-mi-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-mi-title text-center' > { mobiles.title } < /div> <
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

export default Redmi