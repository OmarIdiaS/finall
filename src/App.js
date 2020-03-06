import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Banner from "../src/Component/Banner"
function App() {
  return (
   <Router>
     <Route path="/" component={Banner} />
   </Router>
  );
}

export default App;
