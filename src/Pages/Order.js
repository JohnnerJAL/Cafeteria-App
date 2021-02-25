import React, { useContext } from "react";

import { JAL } from "../Components/ShoppingCart";
import OrderStyle from "../Components/OrderStyle";

function Order() {
  const { PRODUCTS, cart, increase, decrease } = useContext(JAL);
  
  let keys = [];
  let values = [];

  Object.values(cart).forEach((value, idx) => {
    if (value > 0) {
      keys.push(Object.keys(cart)[idx]);
      values.push(value);
    }
  });

  let shoppingList = [];

  Object.keys(PRODUCTS).forEach(category => {
    PRODUCTS[category].forEach((item, idx) => {
      keys.forEach(key => {
        if (key === PRODUCTS[category][idx].id) {
          shoppingList.push(PRODUCTS[category][idx]);
        }
      })
    });
  });

  const PHONE = 573015555048;
  const request = [];

  shoppingList.forEach((item, idx) => {
    request.push(`Producto ${idx+1}
      ${item.name}: ${values[idx]}
      descripcion: ${item.description}//
    `);
  });

  const MESSAGE = `Nuevo pedido:
  
  ${request.join(`
  `)}
  `;

  console.log(MESSAGE)

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      increase={increase}
      decrease={decrease}
      phone={PHONE}
      message={MESSAGE}
    />
  )
}

export default Order;