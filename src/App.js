import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConverter';
import  Win  from './components/Win';
import DropdownMenu from './components/Dropdown'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <DropdownMenu/>
          <Route exact path="/CC" component={CurrencyConverter} />
          <Route path="/Win" component={Win} />
      </HashRouter>
    </div>
  );
}

export default App;
