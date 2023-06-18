import React from 'react'
import './StatsPreview.css'

const StatsPreview = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="wrapper">
                    <div className="text_component">
                        <h1 className="title">
                            Get <span className='insights'>insights</span> that help your business grow.
                        </h1>
                        <p className='subtitle'>
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer
                            experience, and overall efficiency.
                        </p>
                        <div className="stat_box">
                            <div>
                                <p className='num'>10k+</p>
                                <p>companies</p>
                            </div>
                            <div>
                                <p className='num'>314</p>
                                <p>templates</p>
                            </div>
                            <div>
                                <p className='num'>12m+</p>
                                <p>queries</p>
                            </div>
                        </div>
                    </div>

                    <div className="img_component">
                        <img src="src\assets\Stats Preview\image-header-desktop.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsPreview