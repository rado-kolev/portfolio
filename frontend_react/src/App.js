import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial />  -->>> when active, to add it to Navbar and NavigationDots */}
      <Footer />
    </div>
  );
}

export default App;