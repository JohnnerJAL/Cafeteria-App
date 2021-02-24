import React from "react";
import { Link } from "react-router-dom";

import "./Styles/ShoppingCart.css";
import hamburgerImage from "../Images/Hamburger-pexels.jpg";
import empanadaImage from "../Images/Empanadas-pexels.jpg";
import beerImage from "../Images/beer-pexels.jpg";

function ShoppingCart() {

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
    <section className="shopping-cart">
      <div className="title">
        <h1>Mi Carrito</h1>
        <i className="fas fa-cart-arrow-down"></i>
      </div>

      <div className="message-container">
        <div className="message">
          <h1>Recuerda:</h1>
          <p>Tu orden será enviada a nuestro whatsapp en donde coordinaremos la entrega y el pago</p>
        </div>
      </div>

      <div className="articles">
      {/* <div className="list-of-items"> */}
        <article>
          <figure style={empanada}></figure>
          <div className="contents">
            <h4>Empanada de carne</h4>
            {/* <p>Empanada de carne con huevo</p> */}
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
            {/* <p>Empanada de pollo con huevo</p> */}
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
      {/* </div> */}
      </div>

      <div className="resume">
       <div>
          <Link  to="/menu">
            <p>Agregar más productos</p>
            {/* <i className="fas fa-cart-arrow-down"></i> */}
          </Link>
        </div>

      <div>
        <div className="row">
          <p>Envío (opcional)</p>
          <p>$2 000</p>
        </div>
        <div className="row">
          <p>Total</p>
          <p>$5 600</p>
        </div>
      </div>

      <div>
        <Link  to="/shopping-cart">{/*¡?*/}
          <p>Confirmar orden</p>
          <i className="fab fa-whatsapp"></i>
        </Link>
      </div>
      </div>
    </section>
  )
}

export default ShoppingCart;