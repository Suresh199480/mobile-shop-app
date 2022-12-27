import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ mobile }) => {
    return ( <
        >
        <
        div className = 'container' >
        <
        div className = 'row' >
        <
        div className = { mobile.parentcls } >
        <
        div className = 'listitem' >
        <
        div className = 'left-item' >
        <
        img src = { mobile.img }
        alt = { mobile.title }
        /> <
        /div> <
        div className = 'right-item' >
        <
        div className = 'iphone-btn' > { mobile.title } < /div> <
        div className = 'item-cost' > { mobile.priceone }₹ < /div> <
        div className = 'item-variant' > For Variant: { mobile.variantone } < /div> <
        div className = 'item-cost-two' > { mobile.pricetwo }₹ < /div> <
        div className = 'item-variant-two' > For Variant: { mobile.varianttwo } < /div> <
        Link className = 'sell-btn-link'
        to = { mobile.path } > < div className = 'sell-btn' > { mobile.sellbtn } < /div></Link >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default ListItem