import React from 'react'
import FooterSec from '../footer/FooterSec'

const BePartner = () => {
    return ( <
        >
        <
        div className = 'partner-section' >
        <
        div className = 'container partner-container' >
        <
        div className = 'row d-flex align-items-center justify-content-between' >
        <
        div className = 'col-md-6' >
        <
        div className = 'partner-left' >
        <
        div className = 'partner-title' > Be Partner < /div> <
        div className = 'partner-text' > Feel free to contact us any time.We will get < br / > back to you as soon as you can!. < /div> <
        div className = 'form' >
        <
        div className = 'input-field' >
        <
        input type = "text"
        name = 'name'
        placeholder = 'Organization Name' / >
        <
        input type = "text"
        name = 'name'
        placeholder = 'Contact Person Name' / >
        <
        input type = "number"
        name = 'number'
        placeholder = 'Mobile Number' / >
        <
        input type = "email"
        name = 'email'
        placeholder = 'Email' / >
        <
        button type = 'btn'
        className = 'submit-btn' > Submit < /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = 'col-md-6 d-flex flex-column align-items-center justify-content-center' >
        <
        div className = 'contact-box' >
        <
        div className = 'contact-partner' >
        <
        div className = 'contact-title' > Contact Info < /div> <
        div className = 'contact-phone d-flex' >
        <
        i class = "fa-solid fa-headset" > < /i><div className='contact-num'>+919876543210</div >
        <
        /div> <
        div className = 'email-envelope d-flex' >
        <
        i class = "fa-solid fa-envelope-open-text" > < /i><div className='info-mail'>info@example.com</div >
        <
        /div> <
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

export default BePartner