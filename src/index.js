import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

//makes a middleware
const sagaMiddleware  = createSagaMiddleware();

function* rootSaga () {
    console.log('rootSaga loaded');
    // yield takeEvery('GET_PIZZAS', getOrderSaga);
    yield takeEvery('POST_PIZZAS', postSaga);
    yield takeEvery('GET_ORDERS', getOrderSaga);


  }

  function* getOrderSaga(action){
    console.log('get saga', action);
    try {
        const elementsResponse = yield call(axios.get, '/api/orders');
        console.log(elementsResponse)
        yield put({
            type: 'DISPLAY_ORDER',
            payload: elementsResponse.data
        })
    } catch (error) {}
}

    function* postSaga(action){
        console.log('post Saga ', action.payload);

        try {
        const pizzaResponse = yield call(axios.put, '/api/orders', action.payload);
        
        console.log(pizzaResponse)
        yield put({
            type: 'GET_ORDERS',
            // payload: pizzaResponse.data
        })
    } catch (error) {}
    }

    const orderReducer =(state, action)=>{
        if(action.type === 'DISPLAY_ORDER'){
            console.log('this is the action payload of display', action.payload);
            return action.payload
        } return state;
    }


const currentOrder = (state = [], action) => {
    
    if (action.type === 'MINUS_PIZZA') {
        console.log('order state', state);
        return  [...state, action.payload]
        
        return state;
    }
    return state;
}


const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        currentOrder
        

    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

