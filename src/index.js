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
    yield takeEvery('GET_PIZZAS', firstSaga);
  }

  function* firstSaga(action){
    console.log('first saga', action);
    // try {
    //     const elementsResponse = yield call(axios.get, '/api/pizza');
    //     console.log(elementsResponse)
    //     yield put({
    //         type: '',
    //         payload: elementsResponse.data
    //     })
    // } catch (error) {}
}

const currentOrder = (state = 0, action) => {
    if (action.type === 'ADD_PIZZA') {
        console.log('order state', state);
       
        return state ;
    }else if (action.type === 'MINUS_PIZZA') {
        console.log('order state', state);
        // if(state <= 0){
        //     return state = 0
        // }
        
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

