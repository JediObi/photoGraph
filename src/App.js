import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';


import CardOnlyMedia from './CardOnlyMedia';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

//把文件名转换成文件路径
/*

*/
class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                {/*<CardOnlyMedia/>*/}
            </MuiThemeProvider>
        );
    }
}

export default App;
