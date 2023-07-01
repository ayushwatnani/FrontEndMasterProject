import React from 'react'
import './NFTComponent.css'

const NFTComponent = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="wrapper">
                    <img className='coin__image' src="src\assets\NFT\image-equilibrium.jpg" alt="" />
                    <div className="info">
                        <h2 className="info__title">
                            Equilibrium #3429
                        </h2>
                        <p className='info__subtitle'>
                            Our Equilibrium collection promotes balance and calm.
                        </p>
                        <div className="info__value">
                            <div className="coin__value">
                                <img src="src\assets\NFT\icon-ethereum.svg" alt="" />
                                0.041 ETH
                            </div>
                            <div className="time__left">
                                <img src="src\assets\NFT\icon-clock.svg" alt="" />
                                3 days left
                            </div>
                        </div>
                        <div className="info__creator">
                            <img src="src\assets\NFT\image-avatar.png" alt="" />
                            Creation of Jules Wyvern
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTComponent