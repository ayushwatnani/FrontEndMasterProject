import React from 'react'
import './FourCardFeature.css'

const FourCardFeature = () => {
    return (
        <div className='body'>
            <div className="container">
                <header>
                    <h2>Reliable, efficient delivery</h2>
                    <h3>Powered by Technology</h3>
                    <p>Our Artificial Intelligence powered tools use millions of project data points
                        to ensure that your project is successful
                    </p>
                </header>
                <section className="main">
                    <div className="box box1">
                        <div className="box_text">
                            <h5>Supervisor</h5>
                            <p>Monitors activity to identify project roadblocks</p>
                        </div>
                        <img src="src\assets\four_card_feature\icon-supervisor.svg" alt="" />
                    </div>
                    <div className='box_container'>
                        <div className="box box2">
                            <div className="box_text">
                                <h5>Team Builder</h5>
                                <p>Scans our talent network to create the optimal team for your project</p>
                            </div>
                            <img src="src\assets\four_card_feature\icon-team-builder.svg" alt="" />
                        </div>
                        <div className="box box3">
                            <div className="box_text">
                                <h5>Karma</h5>
                                <p>Regularly evaluates our talent to ensure quality</p>
                            </div>
                            <img src="src\assets\four_card_feature\icon-karma.svg" alt="" />
                        </div>                        
                    </div>
                    <div className="box box4">
                            <div className="box_text">
                                <h5>Calculator</h5>
                                <p>Uses data from past projects to provide better delivery estimates</p>
                            </div>
                            <img src="src\assets\four_card_feature\icon-calculator.svg" alt="" />
                        </div>
                </section>
            </div>
        </div>
    )
}

export default FourCardFeature