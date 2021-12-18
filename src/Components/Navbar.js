import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>UnBaised News</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/technology">Technology</a>
        </li>
      </ul>

          {/* Search bar setup */}

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        <button className="btn btn-outline-light text-dark" type="submit"><b>Search</b></button>
      </form>


    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar;
