import React, { createContext } from "react";

import { PRODUCTS } from "../API/Products";

const JAL = createContext();

function ShoppingCart(props) {
  const idProducts = PRODUCTS.empanadas
    .concat(PRODUCTS.hamburgesas)
    .concat(PRODUCTS.bebidas)
    .concat(PRODUCTS.combos)
    .map(e => e = e.id)
  ;

  let initialStateCart = {};
  for (let i of idProducts) {
    initialStateCart[i] = 0
  }

  const [cart, setCart] = React.useState(initialStateCart);

  const increase = e => {
    setCart({
      ...cart,
      [e.target.dataset.product]: cart[e.target.dataset.product] + 1
    });
  }

  const decrease = e => {
    if(cart[e.target.dataset.product] > 0) {
      setCart({
        ...cart,
        [e.target.dataset.product]: cart[e.target.dataset.product] - 1
      });
    }
  }

  return (
    <JAL.Provider value={{ PRODUCTS ,cart, increase, decrease }}>
      {props.children}
    </JAL.Provider>
  )
}

export { ShoppingCart, JAL };