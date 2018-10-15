import React, { Component } from 'react';

class Breakfast extends Component {
    constructor(prop) {
        super(prop)
        
        this.break = prop.break
        this.price = prop.price
    }
    
    render() {
        return (
            <div
              onClick={this.props.onClick}
              className="Button"
              data-size={this.props.size}
              data-value={this.props.value}
            >{this.break} {this.price}
              {/* {this.props.label} */}
            </div>
          )
    }
}
export default Breakfast;