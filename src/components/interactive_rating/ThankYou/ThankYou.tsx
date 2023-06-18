import './ThankYou.css';

const ThankYou = ({rating}:any) => {
    return (
        <div className='thank__you__panel'>
            <img src="/illustration-thank-you.svg" alt="" />
            <p className='selected'>You selected {rating} out of 5</p>
            <h1 className='title'>Thank You!</h1>
            <p>We appreciate you taking the time to give us rating.
                If you ever need more support, don't hesitate to get in touch
            </p>
        </div>
    )
}

export default ThankYou