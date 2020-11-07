import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import reducer from './reducer/reducer';

function App() {
  const store=createStore(reducer);
  return (
    <Provider store={store}>
    <div className="App">
      <Route exact path='/'><Login/></Route>
      <Route path='/Home'><Home/></Route>
    </div>
    </Provider>
  );
}

export default App;
