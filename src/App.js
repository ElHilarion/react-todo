import React from 'react';

import Items from './pages/Items';
import Menu from './components/Menu';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Menu/>
        <Items />
      </div>
    </div>
  );
}

export default App;
