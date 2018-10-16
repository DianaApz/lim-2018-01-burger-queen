import React, { Component } from 'react';
import Breakfast from './break';
import data from '../menu.json'
class ResultBreak extends Component {
    constructor() {
        super()
        this.state = { operations: [], total: 0 }
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleClick(e) {
        const add = this.state.total
        const array = this.state.operations
        const value = e.target.getAttribute('data-value')
        const label = e.target.getAttribute('data-tag');
        console.log(label)
        array.push({ type: label, price: value });
        // this.setState({ operations: array })
        this.state.operations.map((obj) => {
            this.setState({ total: this.state.total + parseInt(obj.price) })
        })

        // this.setState({ total: this.state.total + parseInt(value) })

    }
    handleDelete(id) {
        this.setState({
            operations: this.state.operations.filter((e, index) => {
                return index !== id
            }),
        })
        this.state.operations.map((obj) => {
            this.setState({ total: this.state.total - parseInt(obj.price) })
        })

    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-6">

                        {/* <Change> */}
                        <div>
                            {data.Desayuno.map((menubreak, i) => {
                                return (<Breakfast
                                    onClick={this.handleClick} value={menubreak.price}
                                    food={menubreak.type}
                                    price={menubreak.price}
                                    key={i}
                                    id={i}
                                />);
                            })
                            }
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            {this.state.operations.map((menu, i) => {
                                return (<div key={i}>
                                    {menu.type}
                                    <span className="close"
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
export default ResultBreak;