import React from "react"

export default function Main(){
    return (
        <div className="info">
            <h4 id="name" >Rudraksh Garg</h4>
            <h6 id="job" >Web Developer</h6>
            <a className="emailLink" href="mailto:Rudrakshg25@gmail.com">
            <button className="emailButton">
                    <img src="https://res.cloudinary.com/dlckzs7d5/image/upload/v1671633403/Mail_gwcd9r.png" alt="mail-logo"  className="mail-icon"/>
                    Email
            </button></a>
            
                
            <div className ="subInfo" >
            <div >
                <h6>About</h6>
                <p>I am an aspiring software developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div>
                <h6>Interests</h6>
                <p>Food . Guitar and Singing. Reading. Internet fanatic.  Travel geek. Coffee fanatic.</p>
            </div>
            </div>
        </div>
    )
}