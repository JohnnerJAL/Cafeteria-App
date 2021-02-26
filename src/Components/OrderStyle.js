import React from "react";
import { Link } from "react-router-dom";

import "./Styles/OrderStyle.css";

function OrderStyle(props) {
  return (
    <section className="order">
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
        {props.shoppingList.map((item, idx) => {
          return (
            <div className="article-container" key={item.id}>
              <article>
                <figure style={item.styles}></figure>
                <div className="contents">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>$ {item.cost}</p>
                  <p>{props.cartValues[idx]}</p>
                </div>
                <div className="button button-left" onClick={props.decrease} data-product={item.id}>
                  <div className="circle" data-product={item.id}>-</div>
                </div>
                <div className="button button-right" onClick={props.increase} data-product={item.id}>
                  <div className="circle" data-product={item.id}>+</div>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <div className="resume">
        <div>
          <Link  to="/menu">
            <p>Agregar más productos</p>
          </Link>
        </div>

        <div>
          <div className="row">
            <p>Envío (opcional)</p>
            <p>$ 2000</p>
          </div>
          <div className="row">
            <p>Total (Sin envio)</p>
            <p>$ {props.total}</p>
          </div>
        </div>

        <div>
          <a href={`https://api.whatsapp.com/send?phone=${props.phone}&text=${props.message}`}>
            <p>Confirmar orden</p>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OrderStyle;