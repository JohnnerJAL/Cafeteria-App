import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { ShoppingCart } from "./Components/ShoppingCart";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
          <ShoppingCart>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/order" component={Order}/>
          </ShoppingCart>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;