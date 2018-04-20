import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../Menu/pizzaItem';
import { Link} from 'react-router-dom';

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_name: '', 
            order_total: 0
    
        }
    }


    componentDidMount() {
        let totalOrder = 0;

        for (let pizza of this.props.reduxState.currentOrder) {
            totalOrder += (pizza.orders * pizza.pizza.cost);
        }
        console.log(totalOrder);
        this.setState({
            order_total: totalOrder
        });


    }

   handleSubmit  = () => {
    console.log(this.state);
       this.props.dispatch(
           {
              type: 'POST_PIZZAS',
                payload: this.state
           }
       )
   }


    handleChange = (propertyName) => {
        return (event) => {
            this.setState({
                [propertyName]: event.target.value
            });
        }
    }

    render() {
        let pizzaCheckout = this.props.reduxState.currentOrder.map((pizza) => {
            return <h2 key={pizza.pizza.id}>{pizza.pizza.name}<span>{pizza.pizza.cost}</span> {pizza.orders}</h2>
        })

        return (
            <div>

                <input type="text" onChange={this.handleChange('customer_name')} placeholder="Your name"></input>
                <h2>This is the checkout component</h2>
                <pre>{JSON.stringify(this.props.reduxState.currentOrder)}</pre>
                <p>This is state order name: {this.state.customer_name}</p>

                {pizzaCheckout}
                <div><p>Total: {this.state.order_total}</p></div>
                <div><button onClick={this.handleSubmit}>Checkout</button></div>





            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Checkout);
