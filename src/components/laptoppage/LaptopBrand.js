import React from 'react'
import { Link } from 'react-router-dom'
import { LaptopBrandsImgs } from '../../Data'
const LaptopBrand = () => {
    return ( <
        >
        <
        div className = 'laptop-brand-section' >
        <
        div className = 'container laptop-brand-container' >
        <
        div className = 'row d-flex align-items-center justify-content-center' >
        <
        div className = 'col-md-6' >
        <
        div className = 'laptop-brand-heading' > Pick Your Brand < /div> <
        div className = 'laptop-brand-left' > {
            LaptopBrandsImgs.map((brand) => ( <
                Link to = { brand.path } > < img src = { brand.img }
                key = { brand.id }
                alt = '' / > < /Link>
            ))
        } <
        /div> <
        /div> <
        div className = 'col-md-6' >
        <
        div className = 'laptop-brand-right' >
        <
        div className = 'laptop-brand-title' > Find and evaluate your phone to get the < br / > maximum cash! < /div> <
        div className = 'laptop-brand-texts' >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Find your phone</div >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Evaluate It Yourself</div >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Pick a Convenient Slot</div >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Place an Order</div >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Get it Picked from your Doorstep</div >
        <
        div > < i class = "fa-sharp fa-solid fa-check" > < /i> Receive the Payment Instantly</div >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default LaptopBrand