import React from 'react';
import {Link,useHistory} from 'react-router-dom';
//import './styles.css';
import 'materialize-css';
import {Navbar,NavItem,Dropdown,Icon,Divider} from 'react-materialize';

export default function Header(){
    return(

        <Navbar
            alignLinks="right"
            brand={<Link to='/' style={{fontSize:20}}> Programação Não Linear: Multivariável Irrestrito</Link>}
            options={{
                draggable: false,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
              }}
            style={{paddingLeft:40, paddingRight:40}}    
            className="blue-grey darken-4" 
        >
            <NavItem>
                <Link to='/pages/ComoUsar'>
                    Como Usar
                </Link>
            </NavItem>
            <Dropdown
                id="Dropdown"
                options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: false,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
                }}
                trigger={<a href="#!">Métodos{' '}<Icon right>arrow_drop_down</Icon></a>}
            >
                <Link to='/metodos/coordenadasciclicas'>
                    Coordenadas Cíclicas
                </Link>
                <Link to='/metodos/davidonfletcherpowell'>
                    Davidon-Fletcher-Powell (DFP)
                </Link>
                <Link to='/metodos/fletcherandreeves'>
                    Fletcher And Reeves
                </Link>
                <Link to='/metodos/gradiente'>
                    Gradiente
                </Link>
                <Link to='/metodos/gradienteconjugadogeneralizado'>
                    Gradiente Conjugado Generalizado
                </Link>
                <Link to='/metodos/hookeandjeeves'>
                    Hooke And Jeeves
                </Link>
                <Link to='/metodos/newtonirrestrito'>
                    Newton
                </Link>
            </Dropdown> 
        </Navbar>
    );
}