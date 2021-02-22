import React from "react";

import "./Styles/Menu.css";
import hamburger from "../Images/Hamburger-pexels.jpg";
import empanada from "../Images/Empanadas-pexels.jpg";

function Menu() {
  return (
    <section className="menu">
      <form action="" className="form">
        <label htmlFor="search" className="label">
          <input id="search" type="text" placeholder="Search"/>
          <i class="fas fa-search"></i>
        </label>
      </form>

      <div className="main">
        <div></div>
        <div>
          <figure>
            <img src={empanada} alt="Empanada"/>
            <figcaption></figcaption>
          </figure>
          <figure>
            <img src={hamburger} alt="Hamburger"/>
            <figcaption></figcaption>
          </figure>
          <figure>
            <img src="" alt=""/>
            <figcaption></figcaption>
          </figure>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Menu;