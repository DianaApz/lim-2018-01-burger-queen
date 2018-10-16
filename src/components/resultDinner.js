import React, { Component } from 'react';
import data from '../menu.json'
import Breakfast from './break';

class ResultDinner extends Component {
  constructor() {
    super()
    this.state = { operations: [], total: 0 }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleClick(e) {

    const array = this.state.operations
    const value = e.target.getAttribute('data-value')
    const label = e.target.getAttribute('data-tag');
    console.log(label)
    array.push({ type: label, price: value });
    // this.setState({ operations: array })
    // this.setState({ total: this.state.total + parseInt(value) })
    this.state.operations.map((obj) => {
      this.setState({ total: this.state.total + parseInt(obj.price) })
    })
  }
  handleDelete(id) {
    console.log(this.state.operations);
    this.setState({
      operations: this.state.operations.filter((e, index) => {
        return index !== id
      }),
    })
    this.state.operations.forEach((e,i)=>{
      if(i===id){
        this.setState({ total: this.state.total - parseInt(e.price) })
      }
    })



  }
  render() {

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
                return (<div className="card" key={i}>
                  {menu.type}<span className="close"
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