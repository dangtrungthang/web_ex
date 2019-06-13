import React from 'react';
import './App.css';
import { Main } from './routers/clientRouters';
import { BrowserRouter,Route } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from './redux/reducers/allReducers';
import HomeAdmin from './admin/HomeAdmin';
let store = createStore(allReducers);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
