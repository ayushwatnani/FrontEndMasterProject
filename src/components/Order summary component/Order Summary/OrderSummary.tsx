import './OrderSummary.css';

const OrderSummary = () => {
    return (
        <div className="backgound__container">
            <div className="container">
            <div className="hero">
                <img src="/illustration-hero.svg" alt="" />
            </div>
            <div className="text__content">
                <div className="title">
                    Order Summary
                </div>
                <div className="subtitle">
                    You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!
                </div>
                <div className="plan__box">
                    <div className="left__part">
                        <img src="/icon-music.svg" alt="" />
                        <div className='annual__plan__container'>
                            <div className='annual__plan__text'>Annual Plan</div>
                            <div className='annual__plan__cost'>$59.99/year</div>
                        </div>
                    </div>
                    <div className="right__part">
                        <a href="">Change</a>
                    </div>
                </div>
                <div>
                    <button className='proceed_btn'>Proceed to Payment</button>
                </div>
                <div>
                    <button className='cancel__btn'>Cancel Order</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OrderSummary