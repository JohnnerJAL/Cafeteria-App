import React, { createContext } from "react";

import empanadaImage from "../Images/Empanadas-pexels.jpg";
import hamburgerImage from "../Images/Hamburger-pexels.jpg";
import drinkImage from "../Images/beer-pexels.jpg";

const JAL = createContext();

function ShoppingCart(props) {

  const PRODUCTS = {
    general: [
      {
        id: "gen1",
        name: "Empanada",
        category: "empanadas",
        styles: {
          backgroundImage: `url('${empanadaImage}')`
        }
      },
      {
        id: "gen2",
        name: "Hamburguesa",
        category: "hamburgers",
        styles: {
          backgroundImage: `url('${hamburgerImage}')`
        }
      },
      {
        id: "gen3",
        name: "Bebidas",
        category: "bebidas",
        styles: {
          backgroundImage: `url('${drinkImage}')`
        }
      }
    ],

    empanadas: [
      {
        id: "emp1",
        name: "Empanada de carne",
        description: "Empanada de carne con huevo",
        cost: 1800,
        styles: {
          backgroundImage: `url('${empanadaImage}')`
        }

      },
      {
        id: "emp2",
        name: "Empanada de pollo",
        description: "Empanada de pollo con huevo",
        cost: 1800,
        styles: {
          backgroundImage: `url('${empanadaImage}')`
        }
      }
    ],

    hamburgers: [
      {
        id: "ham1",
        name: "Hamburguesa",
        description: "Hamburguesa sencilla",
        cost: 5000,
        styles: {
          backgroundImage: `url('${hamburgerImage}')`
        }
      }
    ],

    bebidas: [
      {
        id: "beb1",
        name: "Cocacola",
        description: "gaseosa 2L",
        cost: 3000,
        styles: {
          backgroundImage: `url('${drinkImage}')`
        }
      },
      {
        id: "beb2",
        name: "Poker",
        description: "cerveza 350ml",
        cost: 2200,
        styles: {
          backgroundImage: `url('${drinkImage}')`
        }
      }
    ]
  }

  const idProducts = PRODUCTS.empanadas
    .concat(PRODUCTS.hamburgers)
    .concat(PRODUCTS.bebidas)
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