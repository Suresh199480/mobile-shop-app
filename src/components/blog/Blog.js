import React from 'react'
import { Link } from 'react-router-dom'
import FooterSec from '../footer/FooterSec'


const Blog = () => {
    return ( <
        >
        <
        div className = 'blog-section' >
        <
        div className = 'container blog-container' >
        <
        div className = 'row d-flex align-items-center justify-content-between' >
        <
        div className = 'col-md-6 d-flex align-items-center justify-content-center' >
        <
        div className = 'card' >
        <
        div className = 'card-img' >
        <
        img src = 'https://buybackart-s3-prod-bucket.s3.amazonaws.com/static/blogposts/zfolddddd.png'
        alt = '' / >
        <
        /div> <
        div className = 'card-body' >
        <
        div className = 'card-heading' > Z Fold4 might get a 3 x telephoto < /div> <
        div className = 'card-text mt-2' > Samsung is working on several improvements
        for the Galaxy Z Fol4,
        if rumours are to be believed.This includes improved cameras to bring the phone a little closer to the S22 models.The phone will < /div> <
        Link to = "/mobile/samsung"
        className = 'btn btn-warning btn-lg mt-4' > Buy Now < /Link> <
        /div> <
        /div> <
        /div> <
        div className = 'col-md-6 d-flex align-items-center justify-content-center' >
        <
        div className = 'card' >
        <
        div className = 'card-img' >
        <
        img src = 'https://buybackart-s3-prod-bucket.s3.amazonaws.com/static/blogposts/gsmarena_001.jpg'
        alt = '' / >
        <
        /div> <
        div className = 'card-body' >
        <
        div className = 'card-heading' > OnePlus Nord CE 2 Leaked Image < /div> <
        div className = 'card-text mt-2' > OnePlus is expected to launch a smartphone called Nord CE 2 Lite - a device that previously leaked with Snapdragon 695 chipset and 5 G support.Now a tispter has shared an image of the phone along with < /div> <
        Link to = "/mobile/oneplus"
        className = 'btn btn-warning btn-lg mt-4' > Buy Now < /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        FooterSec / >
        <
        />
    )
}

export default Blog