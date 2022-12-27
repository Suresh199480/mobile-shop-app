import React from 'react'
import { Link } from 'react-router-dom'
import { OnePlusMobiles } from '../../Data'
import FooterSec from '../footer/FooterSec'
const Oneplus = () => {
    return ( <
        >
        <
        div className = 'mobile-oneplus-section' >
        <
        div className = 'container-fluid mobile-oneplus-container' >
        <
        div className = 'mobile-oneplus-heading text-center' > Select Your Device < /div> <
        div className = 'row mobile-oneplus-row' >
        <
        div className = 'mobile-oneplus-items' > {
            OnePlusMobiles.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'mobile-oneplus-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'mobile-oneplus-title text-center' > { mobiles.title } < /div> <
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

export default Oneplus