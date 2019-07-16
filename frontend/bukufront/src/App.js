import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import './App.css';
import Nav from "../src/Component/navbar/Nav";
import store from "./Publics/redux/store";
import Buku from "./Screens/Buku";

function App() {
  return (
    <Provider store = {store}>
      <div>
      <Nav/>
        <Route path={'/book'} component={Buku}/>
        {/* <Route path={'/borrow'} component={Borrow}/> */}
      </div>
    </Provider>
  );
}

export default App;
