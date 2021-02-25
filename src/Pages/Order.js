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

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      increase={increase}
      decrease={decrease}
    />
  )
}

export default Order;