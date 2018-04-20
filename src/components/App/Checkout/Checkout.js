import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../Menu/pizzaItem';
import { Link} from 'react-router-dom';

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            pizzas: [],
            orderSize: 0
          }
    }

    postPizza = (pizza) => {
        this.props.dispatch({ type: 'POST_PIZZA', 
        payload: {
            pizza: pizza, 
            orders:  this.state.pizzas}
       });
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
            <input type="text" placeholder="Your name"></input>    
            <h2>This is the checkout component</h2>
            <pre>{JSON.stringify(this.props.reduxState.currentOrder)}</pre>
            {pizzaCheckout}
            <Link to="/order"><button onClick={()=>{this.postPizza(this.state.pizza)}}>COMPLETE ORDER</button></Link>
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Checkout);
