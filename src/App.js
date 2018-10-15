import React, { Component } from 'react';
import Breakfast from './components/break';
import Dinner from './components/dinner';
import Change from './components/change';
import data from './menu.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      show: false
    };
    // console.log(data);
    this.clickBreakfast = this.clickBreakfast.bind(this)
    this.clickDinner = this.clickDinner.bind(this)
  }
  clickBreakfast() {
    this.setState({ showResults: true });
  }
  clickDinner(e) {
    this.setState({ show: true });
    this.setState({ showResults: false });
  }

  clickBreakfast() {
    this.setState({ showResults: true });
    this.setState({ show: false });
  }
  render() {
    const { title, children } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Burger queen
          </p>

        </header>
        <div><button onClick={this.clickBreakfast}>Desayuno</button>
          {this.state.showResults ? <ResultBreak /> : null}
        </div>

        <div> <button onClick={this.clickDinner}>Almuerzo</button></div>
        {this.state.show ? <ResultDinner /> : null}
      </div>

    )
  }
}
class ResultBreak extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    const value = e.target.getAttribute('data-value')
  }
  render() {
    return (
      <div>

        <Change>
          <div>
            {data.Desayuno.map((menubreak, i) => {
              return (<Breakfast
                onClick={this.handleClick} label={menubreak.price} value={menubreak.price}
                break={menubreak.type}
                price={menubreak.price}
                key={i}
              />);
            })
            }
          </div>
        </Change>
      </div>
    )
  }

}
class ResultDinner extends Component {
  render() {
    // console.log(data.Almuerzo)
    return (
      <div>
        {data.Almuerzo.map((menudinner, i) => {
          return (<Dinner
            dinner={menudinner.type}
            price={menudinner.price}
            key={i}
          />);
        })
        }
      </div>
    )
  }
}
export default App;
