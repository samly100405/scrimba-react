/* eslint-disable react/prop-types */
// import picture from '../assets/person-smiling.jpg'
import starPicture from '../assets/star.png'

// Pass in image, review data, description, location, and price as integer in cents
// Review data contains avereage stars and total reviews
export default function Card({img, avgReview, totalReviews, loc, desc, price}) {
    return (
        <div className="card">
            <img src={img} alt="picture" className='card__picture'/>
            <div className="card__reviews">
                <img src={starPicture} alt="star" className="card__reviews_star" />
                <h4 className="card__reviews__text">{avgReview}<span className="card__reviews__text--grey">({totalReviews}) {loc}</span></h4>
            </div>
                <h4 className="card__description">{desc}</h4>
                <h4 className="card__description"><span className="card__description--bold">From ${price}</span> / person</h4>
        </div>
    )
}