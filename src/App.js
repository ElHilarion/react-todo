import React from 'react';

import Items from './pages/Items';
import Create from './pages/Create';
import Menu from './components/Menu';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Menu/>
        {/* <Create /> */}
        <Items />
      </div>
    </div>
  );
}

export default App;
