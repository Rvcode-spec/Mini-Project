import React from 'react';
import Router from './Router/router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
            <Header/>

     <Router/>
      <Footer/>
    </div>
  );
}

export default App;
