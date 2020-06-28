import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ComoUsar from './pages/ComoUsar';
import Uniforme from './pages/Uniforme';
import Bissecao from './pages/Bissecao';
import Dicotomica from './pages/Dicotomica';
import Fibonacci from './pages/Fibonacci';
import Aurea from './pages/SecaoAurea';
import Newton from './pages/Newton';
import Coordenadas from './pages/Coordenadas Ciclicas';
import Davidon from './pages/Davidon-Fletcher-Powell';
import Fletcher from './pages/Fletcher and Reeves';
import Gradiente from './pages/Gradiente';
import GradienteConj from './pages/Gradiente Conjulgado Generalizado';
import Hooke from './pages/Hooke and Jeeves';
import NewtonI from './pages/Newton Irrestrito'

export default function Routes(){
    return(
        <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/pages/ComoUsar' component={ComoUsar}/> 
                <Route path='/metodos/uniforme' component={Uniforme}/>
                <Route path='/metodos/dicotomica' component={Dicotomica}/>
                <Route path='/metodos/aurea' component={Aurea}/>
                <Route path='/metodos/fibonacci' component={Fibonacci}/>
                <Route path='/metodos/bissecao' component={Bissecao}/>
                <Route path='/metodos/newton' component={Newton}/>
                <Route path='/metodos/coordenadas-ciclicas' component={Coordenadas}/>
                <Route path='/metodos/davidon-fletcher-powell' component={Davidon}/>
                <Route path='/metodos/fletcher-and-reeves' component={Fletcher}/>
                <Route path='/metodos/gradiente' component={Gradiente}/>
                <Route path='/metodos/gradiente-conjulgado-generalizado' component={GradienteConj}/>
                <Route path='/metodos/hooke-and-jeeves' component={Hooke}/>
                <Route path='/metodos/newton-irrestrito' component={NewtonI}/>
            </Switch>
        </BrowserRouter>
        </div>
    );
}