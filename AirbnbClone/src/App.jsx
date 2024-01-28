import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import cardImage from './assets/person-smiling.jpg'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Card 
        img={cardImage}
        avgReview={5.0}
        totalReviews={6}
        loc='USA'
        desc='Life lessons with Katie Zaferes'
        price={136}
      />

    </div>
  )
}

export default App;