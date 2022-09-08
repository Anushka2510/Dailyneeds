import './App.css';
import React,{Component} from 'react';
import Header from './components/header/Header';
import Version from './components/version/Version';
import Menulist from './components/menulist/Menulist';
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Cart from './components/cart/Cart';


class App extends Component {
  render(){
  
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path= "/menulist" component= {Menulist}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
      <Version/>
      
     
    </div>
    </Router>
  )
  }
}

export default App;

