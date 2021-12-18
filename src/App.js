import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  api = process.env.REACT_APP_API_CODE;

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>

        <Route path = "/" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="general"/>} />
        <Route path = "/business" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="business"/>} />
        <Route path = "/entertainment" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="entertainment"/>} />
        <Route path = "/sports" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="sports"/>} />
        <Route path = "/health" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="health"/>} />
        <Route path = "/technology" element = {<News setProgress={this.setProgress} api={this.api} pageSize={5} category="technology"/>} />
          
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App;


