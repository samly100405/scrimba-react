import experiencesData from "../assets/experiencesData"
import Card from "./Card"

export default function CardContainer() {
    const cards = experiencesData.map(
        (elem, index) =>
            <Card 
                key={index}
                {...elem}
            />
    )
    return (
        <div className="card-container">
            {cards}
        </div>
    )
}