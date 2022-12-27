import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from './ListItem'
import { SliderMobiles } from '../../Data'

const List = () => {
    const [slideNum, setSlideNum] = useState(0)
    const listRef = useRef()
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 20
        if (direction === "left" && slideNum > 0) {
            setSlideNum(slideNum - 1)
            listRef.current.style.transform = `translateX(${390 + distance}px)`;
        }
        if (direction === "right" && slideNum < 9) {
            setSlideNum(slideNum + 1)
            listRef.current.style.transform = `translateX(${-390 + distance}px)`;
        }
    }
    return ( <
        >
        <
        div className = 'list-section' >
        <
        span className = 'list-title' > Exciting Offers < /span> <
        ArrowBackIosOutlined className = 'slider-arrow left-arrow'
        onClick = {
            () => handleClick("left") }
        /> <
        ArrowForwardIosOutlined className = 'slider-arrow right-arrow'
        onClick = {
            () => handleClick("right") }
        /> <
        div className = 'list' >
        <
        div className = 'wrapper' >
        <
        div className = 'list-container'
        ref = { listRef } > {
            SliderMobiles.map((mobile) => ( <
                ListItem key = { mobile.id }
                mobile = { mobile }
                />
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default List