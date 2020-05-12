import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Uniforme from './pages/Uniforme';
import Bissecao from './pages/Bissecao';
import Dicotomica from './pages/Dicotomica';
import Fibonacci from './pages/Fibonacci';
import SecaoAurea from './pages/SecaoAurea';
import Newton from './pages/Newton';


export default function Routes(){
    return(
        <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/metodos/uniforme' component={Uniforme}/>
                <Route path='/metodos/dicotomica' component={Dicotomica}/>
                <Route path='/metodos/aurea' component={SecaoAurea}/>
                <Route path='/metodos/fibonacci' component={Fibonacci}/>
                <Route path='/metodos/bissecao' component={Bissecao}/>
                <Route path='/metodos/newton' component={Newton}/>
            </Switch>
        </BrowserRouter>
        </div>
    );
}