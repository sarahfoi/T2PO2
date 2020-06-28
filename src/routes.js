import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ComoUsar from './pages/ComoUsar';
import Newton from './pages/Newton';
import Coordenadas from './pages/CoordenadasCiclicas';
import Davidon from './pages/DavidonFletcherPowell';
import Fletcher from './pages/FletcherAndReeves';
import Gradiente from './pages/Gradiente';
import GradienteConj from './pages/GradienteConjugadoGeneralizado';
import Hooke from './pages/HookeAndJeeves';
import NewtonI from './pages/NewtonIrrestrito'

export default function Routes(){
    return(
        <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/pages/ComoUsar' component={ComoUsar}/> 
                <Route path='/metodos/newton' component={Newton}/>
                <Route path='/metodos/coordenadasciclicas' component={Coordenadas}/>
                <Route path='/metodos/davidonfletcherpowell' component={Davidon}/>
                <Route path='/metodos/fletcherandreeves' component={Fletcher}/>
                <Route path='/metodos/gradiente' component={Gradiente}/>
                <Route path='/metodos/gradienteconjugadogeneralizado' component={GradienteConj}/>
                <Route path='/metodos/hookeandjeeves' component={Hooke}/>
                <Route path='/metodos/newtonirrestrito' component={NewtonI}/>
            </Switch>
        </BrowserRouter>
        </div>
    );
}