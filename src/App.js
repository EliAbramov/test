import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'
import {Provider} from './ContextAPI'

import './App.css';


function App() {

  let products = [
    {name: "Product 1", price: 10}, 
    {name: "Product 2", price: 20}, 
    {name: "Product 3", price: 40} 
  ]

  const devTeam = {
    x: "Dani",
    y: "Shovevani",
  };

  const title = "title"

  return (
    <div className="App">
      <Header />
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products list={products}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router> 
      <Provider value={devTeam}>
        <Footer />
      </Provider> 
    </div>
  );
}

export default App;
