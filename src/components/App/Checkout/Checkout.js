import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../Menu/pizzaItem';

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            pizzas: [],
            orderSize: 0
          }
    }
    componentDidMount(){
        console.log(this.state.order)
        
        
    }
    
    render(){
        let pizzaCheckout = this.props.reduxState.currentOrder.map( (pizza)=>{
            return <h2>{pizza.pizza.name}<span>{pizza.pizza.cost}</span> {pizza.orders}</h2>
         })
        
        return(
            <div>
            <h2>This is the checkout component</h2>
            <pre>{JSON.stringify(this.props.reduxState.currentOrder)}</pre>
            {pizzaCheckout}
            
   
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Checkout);
