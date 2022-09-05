import './App.css';
import React,{Component} from 'react';
import Header from './components/header/Header';
import Version from './components/version/Version';
import Menulist from './components/menulist/Menulist';


class App extends Component {
  render(){
  
  return (
    <div className="App">
      <Header/>
      <Menulist/>
      <Version/>
      
     
    </div>
  )
  }
}

export default App;

