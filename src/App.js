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
      name: '',
      prueba: ''
    };
  }
  clickBreakfast = () => {
    this.setState({ showDinner: false, showBreak: true });
  }
  clickDinner = (e) => {
    this.setState({ showDinner: true, showBreak: false });
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleClick = (e) => {
    console.log(e.target.value)
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
        <nav className="navbar text-white">
          <h4>BURGER QUEEN</h4>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 buttons">
                  <div className="btn " onClick={this.clickBreakfast}>Desayuno</div>
                  <div className="btn " onClick={this.clickDinner}>Almuerzo</div>
                </div>
                <div className="col-6 ">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div >
          {this.state.showBreak ? <ResultBreak /> : null}
        </div>
        <div >
          {this.state.showDinner ? <ResultDinner /> : null}
        </div>



      </div >

    )
  }
}

export default App;
