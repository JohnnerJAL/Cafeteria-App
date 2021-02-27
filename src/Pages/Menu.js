import React, { useContext } from "react";

import { JAL } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";

function Menu() {
  const { PRODUCTS, cart, increase, decrease } = useContext(JAL);

  const [categoriesOnScreen, setCategoriesOnScreen] = React.useState([0, 1, 2]);
  const [list, setList] = React.useState(PRODUCTS.empanadas);
  const [search, setSearch] = React.useState("");
  let filteredList = PRODUCTS.empanadas;

  React.useEffect(() => {
    const generals = document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");
    generals.forEach(general => {
      general.classList.remove("visible");
    });
    categoriesOnScreen.forEach(category => {
      generals[category].classList.add("visible");
    });
  });

  function clickLeftArrow() {
    if (categoriesOnScreen[0] > 0) {
      setCategoriesOnScreen(categoriesOnScreen.map(e => e - 1));
    }
  }

  function clickRightArrow() {
    const generals = document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");
    if (categoriesOnScreen[2] < generals.length - 1) {
      setCategoriesOnScreen(categoriesOnScreen.map(e => e + 1))
    }
  }

  function clickCategories(e) {
    setList(PRODUCTS[e.target.dataset.category]);
  }

  function handleChange(e) {
    setList(PRODUCTS.empanadas
      .concat(PRODUCTS.hamburgesas)
      .concat(PRODUCTS.bebidas)
      .concat(PRODUCTS.combos)
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

  const jal = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <MenuStyle
      handleChange={handleChange}
      clickRightArrow={clickRightArrow}
      clickLeftArrow={clickLeftArrow}
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

export default Menu;