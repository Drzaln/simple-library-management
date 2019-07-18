import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import './App.css';
import store from "./Publics/redux/store";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import Edit from "../src/Component/modal/editBook";

function App() {
  return (
    <Provider store = {store}>
      <div>
        <Route path={'/'} component={Home} exact />
        <Route path={'/book/:id_buku'} component={Detail}/>
        <Route exact path={'/book/edit/:id_buku'} component={Edit}/>
      </div>
    </Provider>
  );
}

export default App;
