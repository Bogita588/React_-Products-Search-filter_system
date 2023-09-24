import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/Bs';

function Card() {
  return (
    
      
      <div className="card">
            <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
            className="card-img"
            />
            <div className="card-details">
                <h3 className="card-title">Shoe</h3>
                <section className="card-reviews">
                     <AiFillStar className="rating-star"/>
                     <AiFillStar className="rating-star"/>
                     <AiFillStar className="rating-star"/>
                     <AiFillStar className="rating-star"/>
                    <span className='total-reviews'>4</span>


                </section>
                <div className="card-price">
                    <div className="price">
                        <del>sh300</del>250
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon"/>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Card