import './App.css';
import React,{Component} from 'react';
import Header from './components/header/Header';
import Version from './components/version/Version';


class App extends Component {
  render(){
  
  return (
    <div className="App">
      <Header/>
      <Version/>
    </div>
  )
  }
}

export default App;

