import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import './styles.css';

export default function Header(){
    return(
        <div class='header-container'>
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
        </div>
    );
}