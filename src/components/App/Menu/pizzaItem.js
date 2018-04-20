import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class PizzaItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            orderSize: 0,
            pizza: []
          }
    }
    
    handleClickPlus = () => {
        this.state.orderSize = this.state.orderSize + 1
       this.setState({
        orderSize: this.state.orderSize

    })

      }
      handleClickMinus = () => {
          if (this.state.orderSize > 0) {
        this.state.orderSize = this.state.orderSize - 1

        this.setState({
            orderSize: this.state.orderSize
        })
    }
      }
      submitPizza = (pizza)=>{
        this.props.dispatch({ type: 'MINUS_PIZZA', 
        payload: {pizza: pizza, 
            orders:  this.state.orderSize}
       });
        // this.setState({
        //     orderSize: this.state.orderSize
        // })
      }

    render(){
        return(
            <div key={this.props.pizza.id}><h2>{this.props.pizza.name}</h2><br></br><br></br>
            <button onClick={()=>this.handleClickPlus(this.props.pizza)}>+</button>
            <button onClick={()=>this.handleClickMinus(this.props.pizza)}>-</button>
            <button onClick={()=>this.submitPizza(this.props.pizza)}>Add Pizza</button>
                {this.state.orderSize}
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PizzaItem);
