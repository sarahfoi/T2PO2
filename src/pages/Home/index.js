import React from 'react';
import './styles.css';
import 'materialize-css';
import {Row,CollectionItem,CardPanel,Collection,Col,Card,CardTitle} from 'react-materialize';

import Header from '../../components/Header';

export default function Home(){
    return(
        <div class='home'>
            <Row>
                <div class='container'>
                    <CardPanel>
                        <h1>Trabalho de Pesquisa Operacional II </h1>
                        
                        <h2>
                            Este trabalho objetiva a resolução de problemas envolvendo funções não-lineares pelos métodos:
                        </h2>

                        <Collection>
                        <CollectionItem href="/metodos/uniforme">Busca Uniforme</CollectionItem> 
                        <CollectionItem href="/metodos/Dicotomica">Busca Dicotômica</CollectionItem>
                        <CollectionItem href="/metodos/Aurea">Seção Aurea</CollectionItem> 
                        <CollectionItem href="/metodos/Fibonacci">Busca de Fibonacci</CollectionItem> 
                        <CollectionItem href="/metodos/Bissecao">Bisseção</CollectionItem> 
                        <CollectionItem href="/metodos/Newton">Newton</CollectionItem> 
                        </Collection>

                        <h3>Este trabalho foi desenvolvido utilizando o interpretador Node.js, o framework Materialize e as bibliotecas Math.js, React e Yup
                        </h3>
                    </CardPanel>
                        <Col className="teal white-text" s={4} >
                            João Otávio Rodrigues Ferreira Frediani
                            RA:181020289
                            <Card header={<CardTitle image="/img/joão.jpg"></CardTitle>}>
                            </Card>
                        </Col>
                        <Col className="teal white-text" s={4} >
                            Mauricio Scarelli Arantes
                            RA:181020904
                            <Card header={<CardTitle image="/img/mauricio.jpg"></CardTitle>}>
                            </Card>
                        </Col>
                        <Col className="teal white-text" s={4} >
                            Sarah Campos
                            RA:181023822
                            <Card header={<CardTitle image="/img/sarah.jpg"></CardTitle>}>
                            </Card>
                        </Col>
                </div>
            </Row>
        </div>
    );
}