import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import ShoppingCart from "./Pages/ShoppingCart";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/shopping-cart" component={ShoppingCart}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;