import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Tourism from "./components/Tourism"
import Culture from "./components/Culture"
import Governance from "./components/Governance"
import Education from "./components/Education"
import Development from "./components/Development"
import Demographics from "./components/Demographics"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tourism />
      <Culture />
      <Governance />
      <Education />
      <Development />
      <Demographics />
      <Footer />
    </div>
  )
}

export default App
