import React from 'react'
import './HuddleLandingPage.css'

const HuddleLandingPage = () => {
    return (
        <div>
            <div className="body">
                <div className="container">
                    <div className="wrapper">
                        <header className='header'>
                            <img src="src\assets\huddle_component\logo.svg" alt="" />
                        </header>
                        <div className="main">
                            <div className="hero_img">
                                <img src="src\assets\huddle_component\illustration-mockups.svg" alt="" />
                            </div>
                            <div className="hero_text">
                                <h1>Build The Community Your Fans Will Love</h1>
                                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                                    Create connections with your users as you engage in genuine discussion. 
                                </p>
                                <a href="">Register</a>
                            </div>                            
                        </div>
                        <div className="social_links">
                                <a href="">
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-twitter'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-instagram'></i>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HuddleLandingPage