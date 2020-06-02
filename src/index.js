import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(request =>{
    return request;
}, error=> {
    return Promise.reject.error(error)
});
axios.interceptors.response.use(response =>{
    return response;
}, error=> {
    return Promise.reject.error(error)
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
