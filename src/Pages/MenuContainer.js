import React from "react";
import Menu from "./Menu";

import empanadaImage from "../Images/Empanadas-pexels.jpg";
import hamburgerImage from "../Images/Hamburger-pexels.jpg";
import drinkImage from "../Images/beer-pexels.jpg";
// import cart from "../Images/Shopping-cart-pexels.jpg";

function MenuContainer() {

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

  const [list, setList] = React.useState(PRODUCTS.empanadas);
  const [search, setSearch] = React.useState("");
  const [cart, setCart] = React.useState(initialStateCart);
  let filteredList = PRODUCTS.empanadas;

  function clickCategories(e) {
    setList(PRODUCTS[e.target.dataset.category]);
  }

  function handleChange(e) {
    setList(PRODUCTS.empanadas
      .concat(PRODUCTS.hamburgers)
      .concat(PRODUCTS.bebidas)
    );
  
    setSearch(e.target.value);
  }

  search ?
    filteredList = list
      .filter(element => {
        return `${element.name} ${element.description}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
  : filteredList = list;

  const increase = e => {
    setCart({
      ... cart,
      [e.target.dataset.product]: cart[e.target.dataset.product] + 1
    });
  }

  const decrease = e => {
    if(cart[e.target.dataset.product] > 0) {
      setCart({
        ... cart,
        [e.target.dataset.product]: cart[e.target.dataset.product] - 1
      });
    }
  }

  const jal = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <Menu
      handleChange={handleChange}
      categories={PRODUCTS.general}
      clickCategories={clickCategories}
      list={filteredList}
      increase={increase}
      decrease={decrease}
      amount={cart}
      totalAmount={jal}
    />
  )
}

export default MenuContainer;