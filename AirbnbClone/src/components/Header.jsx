import AirbnbLogo from '../assets/airbnb-logo.svg'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={AirbnbLogo} />
        </header>
    )
}

export default Header;