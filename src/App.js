import React, { Component } from 'react';
import ResultBreak from './components/resultBreak';
import ResultDinner from './components/resultDinner';
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
  }
  clickBreakfast = () => {
    return this.setState({ showDinner: false, showBreak: true });
  }
  clickDinner = (e) => {
    this.setState({ showDinner: true, showBreak: false });
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleClick=(e)=>{
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
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          Burger queen
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 buttons">
              <div className="btn btn-secondary" onClick={this.clickBreakfast}>Desayuno</div>
              <div className="btn btn-info" onClick={this.clickDinner}>Almuerzo</div>
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
            <div className="col-6">
              {this.state.welcome ?
              <div className="welcome">
                  <h4>PEDIDO</h4>
                  <p >Bienvenido {this.state.prueba}</p>
              </div> : null}
              {this.state.showForm ?
              <div className="box float-right">
                  <div>
                    <form>
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
                    </form>
                  </div>
              </div> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
