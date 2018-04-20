import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PizzaItem from './pizzaItem';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const style = {
    height: 150,
    width: 220,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  };

class Menu extends Component {
    state = {
        pizzas: [],
        orderSize: 0
      }
       
      
    componentDidMount(){
        axios.get('/api/pizza').then((response) => {
            console.log('get response', response)
            this.setState({
                pizzas: response.data
            })
            
        }).catch( (error) => {
            console.log(error);
        });
        
    }
submitPizza = (pizzaArr)=>{
console.log( pizzaArr)

}
    render(){
        
        let pizzaArr = this.state.pizzas.map( (pizza)=>{
            return <Paper key={pizza.id} style={style}  rounded={8}>
            <PizzaItem key={pizza.id} pizza={pizza} pizzas={this.state.pizzas}/>
            </Paper>
             
         })
        return(
            

            <div>
                {/* <button onClick={()=>this.submitPizza(pizzaArr)}>submit pizza</button> */}
                <pre>{JSON.stringify(this.props.reduxState)}</pre>

            {/* <button onClick={()=>this.handleClickPlus()}>+ order</button>
            <button onClick={()=>this.handleClickMinus()}>- order</button> */}
            {pizzaArr}
        </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Menu);
