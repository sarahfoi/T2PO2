import React from 'react';
import {Link,useHistory} from 'react-router-dom';
//import './styles.css';
import 'materialize-css';
import {Navbar,NavItem,Dropdown,Icon,Divider} from 'react-materialize';

export default function Header(){
    return(
        /*<div class='header-container'>
            <span>Cálculo de Curvas</span>
            <Link className='button' to='/metodos/uniforme'>
                Busca Uniforme
            </Link>
            <Link className='button' to='/metodos/dicotomica'>
                Busca Dicotômica
            </Link>
            <Link className='button' to='/metodos/aurea'>
                Seção Áurea
            </Link>
            <Link className='button' to='/metodos/fibonacci'>
                Busca de Fibonacci
            </Link>
            <Link className='button' to='/metodos/bissecao'>
                Bisseção
            </Link>
            <Link className='button' to='/metodos/newton'>
                Newton
            </Link>
        </div>*/

        <Navbar
            alignLinks="right"
            brand={<Link to='/' style={{fontSize:20}}> Programação Não Linear: Monovariável</Link>}
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
                <Link to='/metodos/uniforme'>
                    Busca Uniforme
                </Link>
                <Divider />
                <Link to='/metodos/dicotomica'>
                    Busca Dicotômica
                </Link>
                <Divider />
                <Link to='/metodos/aurea'>
                    Seção Áurea
                </Link>
                <Divider />
                <Link to='/metodos/fibonacci'>
                    Busca de Fibonacci
                </Link>
                <Divider />
                <Link to='/metodos/bissecao'>
                    Bisseção
                </Link>
                <Divider />
                <Link to='/metodos/newton'>
                    Newton
                </Link>
            </Dropdown> 
        </Navbar>
    );
}