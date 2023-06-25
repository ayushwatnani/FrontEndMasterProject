import React from 'react'
import './QRCode.css'

const QRCode = () => {
    console.log('sad')
    return (
        <div className='body'>
            <div className="container">
                <div className="card">
                    <img src="src\assets\QRCode\image-qr-code.png" alt="" />
                    <div className="text">
                        <h2>Improve your front-end skills by building projects</h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRCode