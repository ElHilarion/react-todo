import React from 'react';

import Items from './pages/Items';
import Create from './pages/Create';

import './scss/content.scss';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="menu">
          <div className="menu__container">
            <h1>MENU</h1>
            <div className="menu__themes">
              <div className="menu__themes-title">
                  <img width={22} src="./img/theme.png" alt="themes"/>
                  <span>Themes</span>
              </div>
              <div className="create__theme">
                  <span>Create a new theme</span>
                  <img width={30} src="./img/plus.png" alt="create theme"/>
              </div>
              <ul>
                <li className="menu__theme">
                  <span>English School</span>
                  <img width={22} src="./img/cart.png" alt="delete theme"/>
                </li>
                <li className="menu__theme">
                  <span>English School</span>
                  <img width={22} src="./img/cart.png" alt="delete theme"/>
                </li>
                <li className="menu__theme">
                  <span>English School</span>
                  <img width={22} src="./img/cart.png" alt="delete theme"/>
                </li>
              </ul>
            </div>
            <div className="menu__calendar">
              <div className="menu__calendar-title">
                  <img width={22} src="./img/time.png" alt="themes"/>
                  <span>Calendar</span>
              </div>
              <div className="calendar">

              </div>
            </div>
            <div className="menu__lang">
              <div className="menu__lang-en">
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content__header">
            <div className="todo__search">
              <input></input>
                <span>Search</span>
                <img width={30} src="./img/search.png" alt="Create a new entry"/>
            </div>
            <div className="todo__button">
              <div className="button">
                <span>Create entry</span>
                <img width={40} src="./img/plus.png" alt="Create a new entry"/>
              </div>

              <div className="button">
                <span>Remind</span>
                <img width={30} src="./img/remind.png" alt="remind"/>
              </div>
            </div>
          </div>
          <Create />
          {/* <Items /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
