import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <header>
            <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href="">
                <img src={logo} className="App-logo" alt="logo" />
                Aplicacion React y Firebase
              </a>
            </nav>
          </header>
          <div className="container-fluid">
            Hola
          </div>
        </div>        
        <footer className="site-footer">
          <div className="container-fluid navbar-dark">
          <div className="wrapper">
            <ul class="list-unstyled">
              <li>
                <a href="https://twitter.com/luissoliersaj" target="_blank"><img class="footerTwitter" src={require('./images/icons/footerTwitter.png')} alt="twitter" width="40"/></a>
                <a href="https://github.com/lsolier" target="_blank"><img className="footerGithub" src={require('./images/icons/footerGithub.png')} alt="github" width="40"/></a>
                <a href="https://plus.google.com/u/0/+LuisSolierSajami31" target="_blank"><img className="footerGoogleplus" src={require('./images/icons/footerGoogle.png')} alt="google plus" width="35"/></a>
                <a href="https://www.linkedin.com/in/lsolier/" target="_blank"><img className="footerLinkedin" src={require('./images/icons/footerLinkedin.png')} alt="linkedin" width="40"/></a>
              </li>
            </ul>
          </div>
            <p>©&nbsp;2018 - Luis Solier.</p> 
          </div>
        </footer>        
      </div>
    );
  }
}

export default App;
