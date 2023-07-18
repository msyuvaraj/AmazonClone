import React from 'react'
import Header from './components/header/Header'
import 'tailwindcss/tailwind.css';
import Banner from './components/home/Banner';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
       <Header />
       <Banner />
       <Footer />
    </div>
   
  )
}

export default App