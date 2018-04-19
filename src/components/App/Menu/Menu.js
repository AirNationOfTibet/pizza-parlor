import React, { Component } from 'react';
import axios from 'axios';

class Menu extends Component {

    componentDidMount(){
        axios.get('/api/pizza').then((response) => {
console.log('get response', response)
        }).catch( (error) => {
            console.log(error);
        });
        
    }

    render(){
        return(
            <h2>This is the menu component</h2>
        )
    }
}
export default Menu;