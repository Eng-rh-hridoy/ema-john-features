import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import Review from "./components/Review/Review";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element ={<Shop />} />
          <Route path="/review" element = {<Review />} />
          <Route path="/inventory" element ={<Inventory />} />
          <Route path="*" element ={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
