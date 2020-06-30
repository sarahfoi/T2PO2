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
                        <Row style={{textAlign:"justify"}}>
                            <Col s={12} m={12} l={12}>
                                <h1 style={{textAlign: "center",fontWeight:"bold"}} className="cyan-text text-darken-1">Trabalho de Pesquisa Operacional II </h1>
                            </Col>
                            
                            <Col s={12} m={12} l={12}>
                                <h3 style={{fontWeight:"bold"}}>Sobre o trabalho</h3>
                            </Col>
                            <Col s={12} m={12} l={12}>
                                <h6>Este trabalho objetiva a resolução de problemas envolvendo funções não-lineares multivariáveis irrestritas pelos métodos:</h6>
                            </Col>
                            <Col s={11} m={11} l={11} offset="s1 m1 l1">
                                
                                <h6><p>● Coordenadas Cíclicas</p></h6>
                                <h6><p>● Davidon-Fletcher-Powell (DFP)</p></h6>
                                <h6><p>● Fletcher And Reeves</p></h6>
                                <h6><p>● Gradiente</p></h6>
                                <h6><p>● Gradiente Conjugado Generalizado</p></h6>
                                <h6><p>● Hooke And Jeeves</p></h6>  
                                <h6><p>● Newton</p></h6>  
                            </Col>
                            <Col s={12} m={12} l={12}>
                                <h6>Este trabalho foi desenvolvido utilizando o interpretador Node.js, o framework Materialize e as bibliotecas Math.js, React e Yup.</h6>
                            </Col>
                        
                            <Col s={12} m={12} l={12}>
                                <h3 style={{fontWeight:"bold"}}>Alunos</h3>
                            </Col>
                            <Col s={4} m={4} l={4}>
                                <Card header={<CardTitle image={require ('../../assets/joão.jpg')}>João Otávio Frediani</CardTitle>} className="cyan darken-1 white-text">
                                    <p>RA 181020289</p>
                                </Card>
                            </Col>
                            <Col s={4} m={4} l={4}>
                                <Card header={<CardTitle image={require ('../../assets/mauricio.jpg')}>Maurício Scarelli</CardTitle>} className="cyan darken-1 white-text">
                                    <p>RA 181020904</p>
                                </Card>
                            </Col>
                            <Col s={4} m={4} l={4}> 
                                <Card header={<CardTitle image={require ('../../assets/sarah.jpg')}>Sarah Campos</CardTitle>} className="cyan darken-1 white-text">
                                    <p>RA 181023822</p>
                                </Card>
                            </Col>
                        
                        </Row>
                    </CardPanel>

                </div>
            </Row>
        </div>
    );
}