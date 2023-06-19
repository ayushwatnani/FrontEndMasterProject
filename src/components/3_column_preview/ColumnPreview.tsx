import React from 'react'
import './ColumnPreview.css'

const ColumnPreview = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="wrapper">
                    <div className="box box1">
                        <img src="" alt="" />
                        <h2>Sedans</h2>
                        <div>
                            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                            or on your next road trip.
                        </div>
                        <div className="box box2">
                            <img src="" alt="" />
                            <h2>SUVs</h2>
                            <div>
                                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                                and off-road adventures.
                            </div>
                        </div>
                        <div className="box box3">
                            <img src="" alt="" />
                            <h2>Luxury</h2>
                            <div>
                                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                                rental and arrive in style.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnPreview