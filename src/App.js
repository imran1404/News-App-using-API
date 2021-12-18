import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>

        <Route path = "/" element = {<News  pageSize={5} category="general"/>} />
        <Route path = "/business" element = {<News  pageSize={5} category="business"/>} />
        <Route path = "/entertainment" element = {<News  pageSize={5} category="entertainment"/>} />
        <Route path = "/sports" element = {<News  pageSize={5} category="sports"/>} />
        <Route path = "/health" element = {<News  pageSize={5} category="health"/>} />
        <Route path = "/technology" element = {<News  pageSize={5} category="technology"/>} />
          
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
