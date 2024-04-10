import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles.css';
import Card from './components/Card';
import JsonData from './data/CardData.json'

function App() {
  
  return (
    <div className="App">
     {/* <h1>Hello, Welcome to App </h1> */}
     <Header />
     <Hero />
     {/* <Card /> */}
     {/* <img src="https://plus.unsplash.com/premium_photo-1695186450461-777ea482f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Image not available" /> */}
{JsonData.map(item => <Card 
     cardContent = {{
      imgSrc : item.image,
      name : item.title,
      phone : item.phoneno,
      email : item.emailaddress
     }}
     />
    )}
      
     {/* <Card imgSrc="https://images.unsplash.com/photo-1712417827761-7a68ff4a90f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" name="Snowy mountain" phone="02134567890" email="test1@gmail.com"/>
     <Card imgSrc="https://images.unsplash.com/photo-1712105052319-c900e970467a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Nice Architechure" phone="032413456789" email="test2@gmail.com"/> */}

     <Footer />

    </div>
  );
}

export default App;
