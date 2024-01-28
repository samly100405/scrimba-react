import HeroImage from '../assets/hero-image.png'

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroImage} className="hero__image" />
            <div className="hero__text">
                <h1 className="hero__text__title">
                    Online Experiences
                </h1>
                <h3 className="hero__text__subtitle">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h3>
            </div>
        </div>
    )
}