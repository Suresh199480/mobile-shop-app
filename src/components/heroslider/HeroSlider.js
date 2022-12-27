import React from 'react'
import { HeroImgSlider } from '../../Data'

const HeroSlider = () => {
    return ( <
        >
        <
        div className = 'hero-slider-section' >
        <
        div className = 'container hero-container' >
        <
        div className = 'hero-slider' >
        <
        div className = 'hero-images ' > {
            HeroImgSlider.map((images) => ( <
                img src = { images.img }
                alt = ''
                key = { images.id }
                className = "mt-4" / >
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default HeroSlider