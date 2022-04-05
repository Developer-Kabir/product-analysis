import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './SliceReview.css'

const SliceReview = (props) => {

    const [reviews, setReviews] = useReview();
    const sliceReviews = reviews.slice(0,3);
    return (
        <div className='sliced'>
            {
                    sliceReviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
            }

        </div>
    );
};

export default SliceReview;