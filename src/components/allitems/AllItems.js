import React from 'react'
import { Link } from 'react-router-dom'
import { AllDeviceItems } from '../../Data'
const AllItems = () => {
    return ( <
        div className = 'all-items-section' >
        <
        div className = 'container all-items-container' >
        <
        div className = 'row all-items-row d-flex align-items-center justify-content-center' > {
            AllDeviceItems.map((items) => ( <
                div className = { items.parentcls }
                key = { items.id } >
                <
                Link to = { items.path }
                className = "item-link" >
                <
                div className = { items.childcls } >
                <
                img src = { items.img }
                alt = { items.title }
                /> <
                div className = 'item-title' > { items.title } < /div> <
                /div> <
                /Link> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    )
}

export default AllItems