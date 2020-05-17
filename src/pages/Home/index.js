import React from 'react';
import './styles.css';

import Header from '../../components/Header';

export default function Home(){
    return(
        <div class='home'>
                    <h1>Trabalho de Pesquisa Operacional II </h1>
                    
                    <h2>
                        Este trabalho objetiva a resolução de problemas envolvendo funções não-lineares pelos métodos:
                    </h2>

                    <ul class='metodo' style={{listStyleType: 'none'}} >
                        <li>-Busca Uniforme</li> 
                        <li>-Busca Dicotômica</li>
                        <li>-Seção Aurea</li> 
                        <li>-Busca de Fibonacci</li> 
                        <li>-Bisseção</li> 
                        <li>-Newton</li> 
                    </ul>

                    <ul class='alunos' style={{listStyleType: 'none'}} >
                        <li>Trabalho realizado por:</li>
                        <li>João Otavio Rodrigues Ferreira Frediani RA:181020289</li>
                        <li>Mauricio Scarelli Arantes RA:181020904</li>
                        <li>Sarah Campos RA:181023822</li>
                    </ul>
        </div>
    );
}