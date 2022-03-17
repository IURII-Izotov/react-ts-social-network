import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (store:any)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.state} dispatch={store.dispatch}/>
    </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
}