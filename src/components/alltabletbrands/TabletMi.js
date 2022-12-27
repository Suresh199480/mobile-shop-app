import React from 'react'
import { Link } from 'react-router-dom'
import { MiTablets } from '../../Data'
import FooterSec from '../footer/FooterSec'

const TabletMi = () => {
    return ( <
        >
        <
        div className = 'tablet-mi-section' >
        <
        div className = 'container-fluid tablet-mi-container' >
        <
        div className = 'tablet-mi-heading text-center' > Select Your Device < /div> <
        div className = 'row tablet-mi-row' >
        <
        div className = 'tablet-mi-items' > {
            MiTablets.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'tablet-mi-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'tablet-mi-title text-center' > { mobiles.title } < /div> <
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

export default TabletMi