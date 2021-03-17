import React from 'react';
import './styles/App.css';

import Posts from './components/Posts';
import Menu from './components/Menu';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Menu/>
      <ContactBar/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
