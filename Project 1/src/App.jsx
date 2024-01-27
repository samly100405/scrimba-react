/* eslint-disable react/no-unescaped-entities */
import reactLogo from "./assets/react-icon.png"
import "./Styles.css"
const App = () => {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <img src={reactLogo}/>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

const MainContent = () => {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <small>samly</small>
        </footer>
    )
}
export default App;