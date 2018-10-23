import React, { Component } from 'react';
import data from '../menu.json'
import Breakfast from './break';

class ResultBreak extends Component {
  constructor() {
    super()
    this.state = { operations: [], total: 0 }
  }
  handleClick=(e)=>{

    const array = this.state.operations
    const value = e.target.getAttribute('data-value')
    const label = e.target.getAttribute('data-tag');
    // console.log(label)
    array.push({ type: label, price: value });
    // this.setState({ operations: array })
    // this.setState({ total: this.state.total + parseInt(value) })
    this.state.operations.map((obj) => {
      this.setState({ total: this.state.total + parseInt(obj.price) })
    })
  }
  handleDelete=(id)=> {
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                {data.Desayuno.map((menudinner, i) => {
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
        </div>
      </div>
    )
  }
}
export default ResultBreak;
// import React, { Component } from 'react';
// import Breakfast from './break';
// import data from '../menu.json'
// class ResultBreak extends Component {
//     constructor() {
//         super()
//         this.state = { operations: [], total: 0 }

//     }
//     handleClick=(e)=> {
//         const array = this.state.operations
//         const value = e.target.getAttribute('data-value')
//         const label = e.target.getAttribute('data-tag');
//         // console.log(label)
//         array.push({ type: label, price: value });
//         // this.setState({ operations: array })
//         this.state.operations.map((obj) => this.setState({ total: this.state.total + parseInt(obj.price) }))

//         // this.setState({ total: this.state.total + parseInt(value) })
//     }
//     delete=(id)=>{
//         this.setState({
//             operations: this.state.operations.filter((e, index) => {
//                 return index !== id
//             }),
//         })
//         this.state.operations.forEach((e, i) => {
//             if (i === id) {
//                 this.setState({ total: this.state.total - parseInt(e.price) })
//             }
//         })

//     }
//     render() {
//         return (

//             <div className="container">
//                 <div className="row">
//                     <div className="col-6">

//                         {/* <Change> */}
//                         <div>
//                             {data.Desayuno.map((menubreak, i) => {
//                                 return (<Breakfast
//                                     onClick={this.handleClick} value={menubreak.price}
//                                     food={menubreak.type}
//                                     price={menubreak.price}
//                                     key={i}
//                                     id={i}
//                                 />);
//                             })
//                             }
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div>
//                             {this.state.operations.map((menu, i) => {
//                                 return (<div className="card" key={i}>
//                                     {menu.type}
//                                     <span className="clo"
//                                         onClick={() =>this.delete(i)}>
//                                         x
//                                     </span>

//                                 </div>)
//                             })}

//                         </div>
//                         <p>Total = {this.state.total}</p>
//                     </div>
//                 </div>
//             </div>


//         )
//     }

// }
// export default ResultBreak;