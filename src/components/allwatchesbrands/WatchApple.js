import React from 'react'
import { Link } from 'react-router-dom'
import { AppleWatch } from '../../Data'
import FooterSec from '../footer/FooterSec'

const WatchApple = () => {
    return ( <
        >
        <
        div className = 'watch-apple-section' >
        <
        div className = 'container-fluid watch-apple-container' >
        <
        div className = 'watch-apple-heading text-center' > Select Your Device < /div> <
        div className = 'row watch-apple-row' >
        <
        div className = 'watch-apple-items' > {
            AppleWatch.map((mobiles) => ( <
                Link to = "#" >
                <
                div className = 'watch-apple-box'
                key = { mobiles.id } >
                <
                img src = { mobiles.img }
                alt = { mobiles.title }
                /> <
                div className = 'watch-apple-title text-center' > { mobiles.title } < /div> <
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

export default WatchApple