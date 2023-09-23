import { AiFillStar } from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/ai';
import './products.css'
import React from 'react'

function Products() {
  return (
    <div className="card-container">
        <div className="card">
            <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
            className="card-img"
            />
            <div className="card-details">
                <h3 className="card-title">Shoe</h3>
                <section className="card-reviews">
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    <span className='total-reviews'>4</span>


                </section>
                <div className="card-price">
                    <div className="price">
                        <del>sh300</del>250
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill />
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Products