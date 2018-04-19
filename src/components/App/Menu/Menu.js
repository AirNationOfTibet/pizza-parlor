import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PizzaItem from './pizzaItem'


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
    // handleClickPlus = (pizza) => {
        
    //     this.props.dispatch({ type: 'MINUS_PIZZA', 
    //     payload: {pizza: pizza, 
    //         orders: 1}
    //    });
        
    //   }
    //   handleClickMinus = (pizza) => {
          
    //     this.props.dispatch({ type: 'MINUS_PIZZA', 
    //     payload: {pizza: pizza, 
    //         orders: 1}
    //    });
        
    //   }

    render(){
        let pizzaArr = this.state.pizzas.map( (pizza)=>{
            return <PizzaItem pizza={pizza} pizzas={this.state.pizzas}
             />
         })
        return(
            <div>
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
