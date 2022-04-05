import React from 'react';
import { Link } from 'react-router-dom';
import SliceReview from '../SliceReview/SliceReview';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='gelary'>
                <div className='mt-4'>
                    <h1 className='fw-bold'>Choose a luxurious car</h1>
                    <h1 className='text-info fw-bold mb-3'>Fulfil your dream</h1>
                    <p>If you want the very last word in opulence, sophistication, sense of occasion and conferred status from your choice of car, this is the niche you’ll be shopping in. There isn’t a car here that you can buy for less than a six-figure outlay, and one or two might even cost you seven figures.</p>
                    <button type="button" className="btn btn-outline-info fw-bold text-black">Live Demo</button>
                </div>
                <div className='image'>
                    <img className='rounded ms-4' width={450} src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>

            <div>
                <h2 className='review-heading'>Our Custome Review</h2>
                <SliceReview></SliceReview>
                <Link className='btn-l' to="/reviews"><button className='btn-link'>See More Reviews</button></Link>
            </div>
        </div>
    );
};

export default Home;