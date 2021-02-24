import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import MenuContainer from "./Pages/MenuContainer";
import ShoppingCart from "./Pages/ShoppingCart";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
          <Route exact path="/menu" component={MenuContainer}/>
          <Route exact path="/shopping-cart" component={ShoppingCart}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;