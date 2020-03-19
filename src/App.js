import React from 'react';
import logo from './logo.svg';
//import './style';
import 'sass/style.scss';
import { Link, Route } from "wouter";
import Catalogue from 'components/Catalogue'
import Landing from 'components/CustomerLanding'

function App() {

  return (
    <>
    <Route path="/">

    <section className="theme-light">
    <h1>Menu</h1>
    <ul>
      <li><a href="/catalog" target="_blank"><h4>Catalogue</h4></a></li>
      <li><a href="/CustomerLanding" target="_blank"><h4>Landing</h4></a></li>
    </ul>
    </section>
    </Route>
    <Route path="/catalog"><Catalogue/></Route>

    </>
  );
}

export default App;
