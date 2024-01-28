import reactLogo from '../assets/react.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={reactLogo} className="header-left__logo" />
                <h3 className="header-left__text">ReactFacts</h3>
            </div>
            <div className="header-right">
                <h4 className="header-right__text">React Course - Project 1</h4>
            </div>
        </header>
    )
}

export default Header;