import React, { Component } from 'react';

class Breakfast extends Component {
    constructor(prop) {
        super(prop)
        this.food = prop.food
        this.price = prop.price
        this.text=`${this.food} S/${this.price}`
    }

    render() {
        return (
            <div className="card">
            <div 
              onClick={this.props.onClick}
              className="Button"
              data-tag={this.text}
              data-value={this.props.value}
            >{this.food} S/{this.price}
              
            </div>
            </div>
          )
    }
}
export default Breakfast;