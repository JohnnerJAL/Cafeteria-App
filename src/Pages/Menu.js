import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Menu.css";
import hamburgerImage from "../Images/Hamburger-pexels.jpg";
import empanadaImage from "../Images/Empanadas-pexels.jpg";
import beerImage from "../Images/beer-pexels.jpg";


function Menu() {

  const hamburger = {
    backgroundImage: `url('${hamburgerImage}')`
  }
  const empanada = {
    backgroundImage: `url('${empanadaImage}')`
  }
  const beer = {
    backgroundImage: `url('${beerImage}')`
  }

  return (
    <section className="menu">
      <form action="" className="form">
        <label htmlFor="search" className="label">
          <input id="search" type="text" placeholder="Search"/>
          <i class="fas fa-search"></i>
        </label>
      </form>

      <div className="container-general-articles">
        <div className="general-articles">
          <div className="arrow"><i class="fas fa-chevron-left"></i></div>
          <div className="articles">
            <figure>
              <div style={empanada}></div>
              <figcaption>Empanada</figcaption>
            </figure>
            <figure>
              <div style={hamburger}></div>
              <figcaption>Hamburgesa</figcaption>
            </figure>
            <figure>
              <div style={beer}></div>
              <figcaption>Bebidas</figcaption>
            </figure>
          {/* <figure className="inactive">
            <div style={beer}></div>
            <figcaption>Bebidas</figcaption>
          </figure> */}
          </div>
          <div className="arrow"><i class="fas fa-chevron-right"></i></div>
        </div>
      </div>

      <div className="list-of-items">
        <article>
          <figure style={empanada}></figure>
          <div className="contents">
            <h4>Empanada de carne</h4>
            <p>Empanada de carne con huevo</p>
            <p>$ 1800</p>
            <p>1</p>
          </div>
          <div className="button button-left">
            <div className="circle">-</div>
          </div>
          <div className="button button-right">
            <div className="circle">+</div>
          </div>
        </article>

        <article>
          <figure style={empanada}></figure>
          <div className="contents">
            <h4>Empanada de pollo</h4>
            <p>Empanada de pollo con huevo</p>
            <p>$ 1800</p>
            <p>1</p>
          </div>
          <div className="button button-left">
            <div className="circle">-</div>
          </div>
          <div className="button button-right">
            <div className="circle">+</div>
          </div>
        </article>
      </div>

      <div>
        <Link  to="/shopping-cart" className="to-shopping-cart">
          <i class="fas fa-cart-arrow-down"></i>
          <p className="quantity">2</p>
        </Link>
      </div>
    </section>
  )
}

export default Menu;