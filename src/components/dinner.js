import React, { Component } from 'react';

class Dinner extends Component{
    constructor(prop){
        super(prop)
        this.dinner=prop.dinner
        this.price=prop.price
    }
    render() {
        return (
            <p>{this.dinner} {this.price}</p>
        )
    }
}
export default Dinner;