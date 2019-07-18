import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import './App.css';
import store from "./Publics/redux/store";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";

function App() {
  return (
    <Provider store = {store}>
      <div>
        <Route path={'/'} component={Home} exact />
        <Route path={'/book/:id_buku'} component={Detail} exact/>
      </div>
    </Provider>
  );
}

export default App;
