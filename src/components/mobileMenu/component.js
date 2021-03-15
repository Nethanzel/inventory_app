import "./style.css"
import React from "react"

class MobileMenu extends React.Component {

    hideMenu = () => {
        let menu = document.getElementById("mobMenu");
        menu.style.width = "0px"
    }

    onResize = () => {
        let menu = document.getElementById("mobMenu");
        let hideMenu = menu.getElementsByClassName("mobMenu_hideMenu");
        menu.style.height = (window.innerHeight * 0.985) - 60 + "px";
        menu.style.top = 64 + "px";

        hideMenu[0].style.top = ((menu.offsetHeight - hideMenu[0].offsetHeight) - 5) + "px";
    }

    componentDidMount() {
        let menu = document.getElementById("mobMenu");
        let hideMenu = menu.getElementsByClassName("mobMenu_hideMenu");
        hideMenu[0].style.top = ((menu.offsetHeight - hideMenu[0].offsetHeight) - 5) + "px";

        window.addEventListener("resize", this.onResize);
        window.addEventListener("scroll", this.hideMenu);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("scroll", this.hideMenu);
      }

    render() {
        return (
            <div id="mobMenu">

                <div className="mobMenu_coll">
                    <div className="mobMenu_option">
                        <img src="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-512.png" 
                        alt="add"></img>
                        <h3>Add item</h3>
                    </div>
                </div>

                <div className="mobMenu_hideMenu">
                    <div onClick={this.hideMenu}>
                        X
                    </div>
                </div>

            </div>
        )
    }

}

export default MobileMenu;