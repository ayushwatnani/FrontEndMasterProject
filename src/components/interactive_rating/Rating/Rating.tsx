import { useState } from 'react';
import './Rating.css';
import ThankYou from '../ThankYou/ThankYou';

const Rating = () => {
    const [selectedRating, setSelectedRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleRating = (rating: number) => {
        setSelectedRating(rating);
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return isSubmitted ?
        (
            <div className='backgound'>
                <ThankYou rating={selectedRating} />
            </div>

        ) :
        (
            <div className='backgound'>
                <form onSubmit={handleFormSubmit} className='panel'>
                    <img className='star' src="/icon-star.svg" />
                    <h1 className='title'>How did you go?</h1>
                    <p>Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering.
                    </p>
                    <div className="btn__grp">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button type='button' onClick={() => handleRating(rating)} className='rating'>
                                {rating}
                            </button>
                        ))}
                    </div>
                    <button disabled={selectedRating === undefined} className='submit'>Submit</button>
                </form>
            </div>

        )
}
export default Rating