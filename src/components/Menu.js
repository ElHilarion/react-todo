function Menu(){
    return(
        <div className="menu">
          <div className="menu__container">
            <div>
              
              <h1>MENU</h1>
            </div>
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
    );
}

export default Menu;