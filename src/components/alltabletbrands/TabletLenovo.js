import React from 'react'
import { Link } from 'react-router-dom'
import { LenovoTablets } from '../../Data'
import FooterSec from '../footer/FooterSec'

const TabletLenovo = () => {
    return ( <
        >
        <
        div className = 'tablet-lenovo-section' >
        <
        div className = 'container-fluid tablet-lenovo-container' >
        <
        div className = 'tablet-lenovo-heading text-center' > Select Your Device < /div> <
        div className = 'row tablet-lenovo-row' >
        <
        div className = 'tablet-lenovo-items' > {
            LenovoTablets.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'tablet-lenovo-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'tablet-lenovo-title text-center' > { mobiles.title } < /div> <
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

export default TabletLenovo