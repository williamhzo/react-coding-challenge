import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Temperature from './Pages/Temperature';
import CustomImage from './Pages/CustomImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/temperature" component={Temperature}></Route>
          <Route exact path="/customize-image" component={CustomImage}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
