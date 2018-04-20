import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const style = {
    height: 60,
    width: 220,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  };

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
            return <Paper style={style}><p key={pizza.pizza.id}>{pizza.orders} {pizza.pizza.name}, unit price: {pizza.pizza.cost} </p></Paper>
        })

        return (
            <div>
                <div><input type="text" onChange={this.handleChange('customer_name')} placeholder="Your name"></input></div>
                <div>{pizzaCheckout}</div>
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
