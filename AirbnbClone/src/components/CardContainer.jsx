import experiencesData from "../assets/experiencesData"
import Card from "./Card"

export default function CardContainer() {
    const cards = experiencesData.map(
        (elem, index) =>
            <Card 
                key={index}
                img={elem.img}
                avgReview={elem.avgReview}
                totalReviews={elem.totalReviews}
                loc={elem.loc}
                desc={elem.desc}
                price={elem.price}
            />
    )
    return (
        <div className="card-container">
            {cards}
        </div>
    )
}