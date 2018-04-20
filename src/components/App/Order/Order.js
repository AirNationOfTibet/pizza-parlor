import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class OrderList extends Component{
    componentDidMount(){
        // axios.get('api/orders').then((response)=>{
        //     console.log('get response', response)
        // })
        this.props.dispatch(
            {
               type: 'DISPLAY_ORDER'
            }
        )

    }

    render(){
        let orderList = [
            {
                "id": 1,
                "customer_name": "Chris",
                "order_total": "39.97"
            },
            {
                "id": 2,
                "customer_name": "Steve",
                "order_total": "39.97"
            }
         ];

         let orderArray = orderList.map((order)=>{
            return <tr key= {order.id}><td>{order.customer_name}</td><td>10 minutes</td><td>{order.order_total}</td></tr> 
         }) 
        return(
            <div>
            <h2>Prime Pizza Orders</h2>
            <table>
                <tr>
                    <th>Name</th><th>Time Order Placed</th><th>Cost</th>
                </tr>
                {orderArray}
            </table>
            <pre>{JSON.stringify(this.props.reduxState.orderReducer)}</pre>
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(OrderList);