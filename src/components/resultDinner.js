import React, { Component } from 'react';
import data from '../menu.json'
import Breakfast from './break';

class ResultDinner extends Component {
  constructor() {
    super()
    this.state = { operations: [], total: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    const add = this.state.total
    const array = this.state.operations
    const value = e.target.getAttribute('data-value')
    const label = e.target.getAttribute('data-tag');
    console.log(label)
    array.push(label);
    // this.setState({ operations: array })
    this.setState({ total: this.state.total + parseInt(value) })
  }
  handleDelete(id){

  }
  render() {
    // console.log(data.Almuerzo)
    return (
      <div>
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

          <div className="col-6">
            <div>
              {this.state.operations.map((menu, i) => {
                return (<div key={i}>
                  {menu}<span className="close"
                        onClick={() => this.handleDelete(i)}>
                        x
              </span>

                </div>)
              })}

            </div>
            <p>Total = {this.state.total}</p>
          </div>

        </div>
      </div>
    )
  }
}
export default ResultDinner;