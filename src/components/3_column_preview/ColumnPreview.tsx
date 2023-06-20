import React from 'react'
import './ColumnPreview.css'

const ColumnPreview = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="wrapper">
                    <div className="box box1">
                        <img src="src\assets\3_column_preview\icon-sedans.svg" alt="" />
                        <h2>Sedans</h2>
                        <div>
                            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                            or on your next road trip.
                        </div>
                        <a href="">Learn More</a>
                    </div>
                    <div className="box box2">
                        <img src="src\assets\3_column_preview\icon-suvs.svg" alt="" />
                        <h2>SUVs</h2>
                        <div>
                            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                            and off-road adventures.
                        </div>
                        <a href="">Learn More</a>
                    </div>
                    <div className="box box3">
                        <img src="src\assets\3_column_preview\icon-luxury.svg" alt="" />
                        <h2>Luxury</h2>
                        <div>
                            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                            rental and arrive in style.
                        </div>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnPreview