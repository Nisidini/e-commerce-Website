import NavBar from './components/navBar/navBar'
import Products from './components/products/product'
import Benefits from './components/benefitsSection/benefits'
import Home from './components/homePage/home'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <Benefits/>
        <Products/>
        
      </div>
    </>
  )
}

export default App
