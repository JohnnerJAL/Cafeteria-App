import React, { useContext } from "react";

import { JAL } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";

function Menu() {
  const { PRODUCTS, cart, increase, decrease } = useContext(JAL);

  const [list, setList] = React.useState(PRODUCTS.empanadas);
  const [search, setSearch] = React.useState("");
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

  const jal = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <MenuStyle
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

export default Menu;