import "./style.css";
import logo from "../../resources/img/logo.svg"
import React from "react";

class Header extends React.Component {

  showMenu = () => {
    let menu = document.getElementById("mobMenu");
    menu.style.width = "100%"
  
  }

  render() {
      return (
        <div className="Header">
            <div className="Header_brand">
              <img src={logo} className="Header_logo" alt="logo"></img>
              <h3 className="Header_h3">Reactive Inventory</h3>
            </div>
  
            <div className="Header_actions">
              <img src="https://picaflor-azul.com/images/plus-circle1.png" className="Header_actions_action add" alt="add"></img>
              <img src="https://i.pinimg.com/564x/53/b0/98/53b098486fd6277da1963ccdb74c25c6.jpg" className="Header_actions_action cart" alt="cart"></img>
              <div className="Header_action_search">
                  <input type="text" placeholder="Search..."></input>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAxbNjzjiw8s9ZIHInFake5dT9ZiTA29Nqw&usqp=CAU" 
                  className="Header_actions_action" alt="search"></img>
              </div>
              <img src="https://cdn.iconscout.com/icon/free/png-512/menu-bar-lines-option-list-hamburger-web-6-3228.png" alt="menu" 
              className="Header_actions_action menu" onClick={this.showMenu}></img>

            </div>
        </div>
      );
  }
  
}

export default Header;