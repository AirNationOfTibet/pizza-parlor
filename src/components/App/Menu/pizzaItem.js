import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class PizzaItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            orderSize: 0
          }
    }
    
    handleClickPlus = (pizza) => {
        this.state.orderSize = this.state.orderSize + 1
        console.log( this.state.orderSize)
        this.props.dispatch({ type: 'MINUS_PIZZA', 
        payload: {pizza: pizza, 
            orders:  this.state.orderSize}
       });
       this.setState({
        orderSize: this.state.orderSize
    })
      }
      handleClickMinus = (pizza) => {
        this.state.orderSize = this.state.orderSize - 1
        this.props.dispatch({ type: 'MINUS_PIZZA', 
        payload: {pizza: pizza, 
            orders:  this.state.orderSize}
       });
        this.setState({
            orderSize: this.state.orderSize
        })
      }

    render(){
        return(
            <div key={this.props.pizza.id}><h2>{this.props.pizza.name}</h2>
            <button onClick={()=>this.handleClickPlus(this.props.pizza)}>+ order</button>
            <button onClick={()=>this.handleClickMinus(this.props.pizza)}>- order</button>
                {this.state.orderSize}
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PizzaItem);
