import React, { Component } from 'react';
import data from '../menu.json'
import Breakfast from './break';

class ResultBreak extends Component {
  constructor() {
    super()
    this.state = { operations: [], total: 0 }
  }
  handleClick = (text,food,price) => {
    const array = this.state.operations
    // const price = e.target.getAttribute('data-value')
    // const total = e.target.getAttribute('data-tag');
    array.push({ type: food, price: price });
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
                {data.Desayuno.map((menudinner, i) => {
                  return (<Breakfast
                    handleClick={this.handleClick}
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
                          {menu.type}S/.{menu.price}
                          <span className="close" onClick={() => this.handleDelete(i)}>
                            x
                        </span>
                        </div>
                      )
                    })}
                  </div>
                  <p>Total = {this.state.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    }
    export default ResultBreak;
