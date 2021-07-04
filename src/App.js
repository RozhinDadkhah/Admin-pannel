import React from 'react'
import './App.css'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/UserList/UserList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from './components/pages/userpage/User';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product';
import NewProduct from './components/pages/newproduct/NewProduct';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductList />
            </Route>
            <Route path='/product/:productId'>
              <Product />
            </Route>
            <Route path='/newProduct'>
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
