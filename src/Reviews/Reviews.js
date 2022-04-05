import React from 'react';
import Review from '../components/Review/Review';
import useReview from '../Hooks/useReview';
import './Reviews.css'

const Reviews = () => {


        const [reviews, setReviews] = useReview();
    return (
        <div className='card'>

            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }

        </div>
    );
};

export default Reviews;