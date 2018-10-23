import React, { Component } from 'react';
import data from '../menu.json'
import Breakfast from './break';

class ResultDinner extends Component {
  constructor() {
    super()
    this.state = { operations: [], total: 0 }
  }
  handleClick = (e) => {
    console.log(e.target.value)
    const array = this.state.operations
    const value = e.target.getAttribute('data-value')
    const label = e.target.getAttribute('data-tag');
    array.push({ type: label, price: value });
    this.state.operations.forEach((obj) => {
      this.setState({ total: this.state.total + parseInt(obj.price) })
    })
  }
  handleDelete = (id) => {
    this.setState({
      operations: this.state.operations.filter((e, index) => {
        return index !== id
      }),
    })
    this.state.operations.forEach((e, i) => {
      if (i === id) {
        this.setState({ total: this.state.total - parseInt(e.price) })
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                {data.Almuerzo.map((menudinner, i) => {
                  return (<Breakfast
                    onClick={this.handleClick}
                    value={menudinner.price}
                    food={menudinner.type}
                    price={menudinner.price}
                    key={i}
                    id={i}
                  />);
                })
                }
              </div>
              <div className="col-6 ">
                <div className="d-flex justify-content-center">
                  <form>
                    <label className="d-flex justify-content-center">
                      Ingrese su nombre
                    </label><br></br>
                    <input id='myInput' onChange={this.handleChange} />
                  </form>
                </div>
                <div>
                  {this.state.operations.map((menu, i) => {
                    return (
                      <div className="card" key={i}>
                        {menu.type}
                        <span className="close" onClick={() => this.handleDelete(i)}>
                          x
                        </span>
                      </div>
                    )
                  })}
                </div>
                <p>Total = {this.state.total}</p>
                <button type='button'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ResultDinner;