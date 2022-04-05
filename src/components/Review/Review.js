import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, rating, review, picture} = props.review;
    return (
        
            <div className='rev-card d-flex'>
                <div className=''>
                    <img className='img-fluid mx-auto py-2 rounded' src={picture} alt="" />
                </div>
                <div className='ms-2 rev-content'>
                        <h6>{review}</h6>
                        <h5 className='mt-4'>Rating : {rating}</h5>
                        <h4>{name}</h4>
                </div>
            </div>
    );
};

export default Review;