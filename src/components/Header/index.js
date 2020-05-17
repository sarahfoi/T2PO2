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
            brand={<a className="brand-logo" href="#">Programação Não Linear: Monovariável</a>}
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
            style={{paddingLeft:20, paddingRight:20}}    
        >
            <NavItem href="">
                Sobre
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
                <a href="/metodos/uniforme">
                    Busca Uniforme
                </a>
                <Divider />
                <a href="/metodos/dicotomica">
                    Busca Dicotômica
                </a>
                <Divider />
                <a href="/metodos/aurea">
                    Seção Áurea
                </a>
                <Divider />
                <a href="/metodos/fibonacci">
                    Busca de Fibonacci
                </a>
                <Divider />
                <a href="/metodos/bissecao">
                    Bisseção
                </a>
                <Divider />
                <a href="/metodos/newton">
                    Newton
                </a>
            </Dropdown>
        </Navbar>
    );
}