import React from 'react';
import './styles/App.css';

import Posts from './components/Posts';
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <Menu/>
      <Posts/>
    </div>
  );
}

export default App;
