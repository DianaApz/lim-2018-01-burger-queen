import React, { Component } from 'react';
import ResultBreak from './components/resultBreak';
import ResultDinner from './components/resultDinner';
// import ResultDinner from './components/resultDinner';
// import Change from './components/change';
import data from './menu.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBreak: true,
      showDinner: false,
      showForm: true,
      welcome: false,
      name: '',
      prueba: ''
    };
    this.clickBreakfast = this.clickBreakfast.bind(this)
    this.clickDinner = this.clickDinner.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  clickBreakfast() {
    this.setState({ showDinner: false, showBreak: true });
  }
  clickDinner(e) {
    this.setState({ showDinner: true, showBreak: false });
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleClick(e) {
    console.log(e.target.getAttribute('data-tag'))
    document.getElementById('myInput').value = ''
    this.setState({
      prueba: this.state.name
    });
    this.setState({
      showForm: false,
      welcome: true
    })
  }
  render() {
    const { title, children } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Burger queen
          </p>
        </header>
        <div>
          {this.state.showForm ? <form >
            <label>
              Ingrese su nombre :
            </label>
            <input
              id='myInput'
              onChange={this.handleChange}
            />
            <button type='button' data-tag={this.state.name} onClick={this.handleClick}>
              Enviar
            </button>
          </form> : null}
          {this.state.welcome ? <p>Bienvenido {this.state.prueba}</p>: null}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="btn btn-secondary" onClick={this.clickBreakfast}>Desayuno</div>
              <div className="btn btn-info" onClick={this.clickDinner}>Almuerzo</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                {this.state.showBreak ? <ResultBreak /> : null}
              </div>
              <div>
                {this.state.showDinner ? <ResultDinner /> : null}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
export default App;
