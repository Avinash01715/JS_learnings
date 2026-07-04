import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/card"



function App() {


  return (

    <>

     
      <Navbar/>
      <main>
      This is our main content
      </main>

      <div className="cards">
      <Card title="Card 1" desc = "Hello" />
      <Card title="Card 2" desc = "How" />
      <Card title="Card 3" desc = "Are" />
      <Card title="Card 4" desc = "You?" />

      </div>
      
      <Footer/>
    </>
  )
}

export default App
