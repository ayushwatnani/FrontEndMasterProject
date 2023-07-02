import React from 'react'
import './ProductPreviewCard.css'

const ProductPreviewCard = () => {
    return (
        <div className='body'>
            <div className="container">                
                    <div className="grid">
                        <div className="img">
                            <img src="src/assets/product_preview_card/image-product-desktop.jpg" alt="" />
                        </div>
                        <div className="card-content">
                            <h6 className="pro-cat">Perfume</h6>
                            <h2 className="pro-name">Gabrielle Essence Eau De Parfum</h2>
                            <p className="pro-des">A floral, solar and voluptuous interpretation composed by Olivier Polge,
                                Perfumer-Creator for the House of CHANEL.</p>
                            <div className="price">
                                <p className="current-price">$149.99</p>
                                <p className="old-price">$169.99</p>
                            </div>
                            <button className="cta"><img src="https://digitshack.com/codepen/mentor13/icon-cart.svg" alt="icon-cart" />Add to Cart</button>
                        </div>
                    </div>
                </div>            
        </div>
    )
}

export default ProductPreviewCard