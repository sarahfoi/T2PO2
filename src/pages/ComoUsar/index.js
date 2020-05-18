import React from 'react';
import 'materialize-css';
import {Row,Col,CardPanel,Table,Tabs,Tab,Divider} from 'react-materialize';

export default function ComoUsar() {
  return (
    <Row>
      <div class="container"> 
        <CardPanel>
            <Row>
                <Col s={12} l={12} m={12}>
                    <h3>Como Usar</h3>
                </Col>
                <Col s={12} l={12} m={12} style={{textAlign:"justify"}}>
                    <h5 className="cyan-text text-darken-1" style={{fontWeight:"bold"}}>Passo a passo para calcular o mínimo da função</h5>
                    <h6><p>01. Clique em "métodos" na barra de navegação para visualizar todos os metodos disponíveis.</p></h6>
                    <h6><p>02. Selecione um método da lista.</p></h6>    
                    <h6><p>03. Insira os dados solicitados, em que</p></h6>
                </Col>
                <Col s={11} l={11} m={11} offset={"s1 m1 l1"} style={{textAlign:"justify"}}>
                    <h6><p>
                        <span style={{fontWeight:"bold"}} className="cyan-text text-darken-1">Função:</span> é a função que você deseja minimizar. 
                        Para saber como escrever, verifique as tabelas, de tradução livre, na sessão abaixo (Sintaxes) ou veja a <a href="http://mathjs.org/docs/expressions/syntax.html">documentação da biblioteca Math.js</a>
                    </p></h6>
                    <h6><p>
                        <span style={{fontWeight:"bold"}} className="cyan-text text-darken-1">a:</span> é o limite inferior do intervalo [a,b].
                    </p></h6>
                    <h6><p>
                        <span style={{fontWeight:"bold"}} className="cyan-text text-darken-1">b:</span> é o limite superior do intervalo [a,b].
                    </p></h6>
                    <h6><p>
                        <span style={{fontWeight:"bold"}} className="cyan-text text-darken-1">Δ:</span> é o passo. Deve ser maior que zero.
                    </p></h6>
                    <h6><p>
                        <span style={{fontWeight:"bold"}} className="cyan-text text-darken-1">ε:</span> é o erro. Deve ser maior que zero.
                    </p></h6>
                </Col>
                <Col s={12} l={12} m={12} style={{marginBottom: 30,textAlign:"justify"}}>
                    <h6><p>04. Clique no botão "calcular mínimo".</p></h6>
                    <h6><p>05. O gráfico e a resposta devem aparecer no card da direita.</p></h6>
                </Col>
                <Col s={12} l={12} m={12} style={{marginBottom: 30,textAlign:"justify"}}>
                    <h5 className="cyan-text text-darken-1" style={{fontWeight:"bold"}}>Sintaxes</h5>
                    <h6><p>Refere-se a maneira correta de escrever as funções para que a aplicação funcione adequadamente. 
                        Abaixo, temos quatro tabelas com algumas referências mais importantes, traduzidas livremente. 
                        Caso não encontre o que deseja, verifique a <a href="http://mathjs.org/docs/expressions/syntax.html">documentação da biblioteca Math.js</a></p></h6>
                </Col>
                <Col s={12} l={12} m={12}>
                    <Tabs className="tab-demo z-depth-1">
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Operadores"
                        >
                            <Table>
                                <thead>
                                    <tr>
                                    <th data-field="op">
                                        Operador
                                    </th>
                                    <th data-field="name">
                                        Nome
                                    </th>
                                    <th data-field="sintaxe">
                                        Sintaxe
                                    </th>
                                    <th data-field="exemplo">
                                        Exemplo
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>( e )</td>
                                        <td>Parênteses</td>
                                        <td>(x)</td>
                                        <td>2 * (3 + 4)</td>
                                    </tr>
                                    <tr>
                                        <td>[ e ]</td>
                                        <td>Índice de matriz</td>
                                        <td>[...]</td>
                                        <td>[[1,2],[3,4]]</td>
                                    </tr>
                                    <tr>
                                        <td>+</td>
                                        <td>Adição</td>
                                        <td>x + y</td>
                                        <td>4+5</td>
                                    </tr> 
                                    <tr>
                                        <td>-</td>
                                        <td>Subtração</td>
                                        <td>x - y</td>
                                        <td>5 - 4</td> 
                                    </tr>
                                    <tr>
                                        <td>*</td>
                                        <td>Multiplicação</td>
                                        <td>x * y</td>
                                        <td>5 * 4</td> 
                                    </tr>
                                    <tr>
                                        <td>/</td>
                                        <td>Divisão</td>
                                        <td>x / y</td>
                                        <td>5 / 4</td> 
                                    </tr>
                                    <tr>
                                        <td>%, mod</td>
                                        <td>Resto da divisão inteira</td>
                                        <td>x % y</td>
                                        <td>5 % 4</td> 
                                    </tr>
                                    <tr>
                                        <td>^</td>
                                        <td>Potência</td>
                                        <td>x ^ y</td>
                                        <td>5 ^ 4</td> 
                                    </tr>
                                    <tr>
                                        <td>!</td>
                                        <td>Fatorial</td>
                                        <td>x!</td>
                                        <td>5!</td> 
                                    </tr>
                                    <tr>
                                        <td>^</td>
                                        <td>Potência</td>
                                        <td>x ^ y</td>
                                        <td>5 ^ 4</td> 
                                    </tr>
                                </tbody>
                            </Table>    
                        </Tab>
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Funções Aritméticas"
                        >
                            <Table>
                                <thead>
                                    <tr>
                                    <th data-field="funcao">
                                        Função
                                    </th>
                                    <th data-field="descricao">
                                        Descrição
                                    </th>
                                    <th data-field="exemplo">
                                        Exemplo
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>abs(x)</td>
                                        <td>Calcula o módulo (valor absoluto) do número.</td>
                                        <td>abs(-5)</td>
                                    </tr>
                                    <tr>
                                        <td>exp(x)</td>
                                        <td>Calcula o exponencial de um valor.</td>
                                        <td>exp(5)</td>
                                    </tr>
                                    <tr>
                                        <td>log10(x)</td>
                                        <td>Calcula o logaritmo de um valor na base 10</td>
                                        <td>log10(2)</td>
                                    </tr>
                                    <tr>
                                        <td>log(x,y)</td>
                                        <td>Calcula o logaritmo do número x na base y.</td>
                                        <td>log(100,10)</td>
                                    </tr>
                                    <tr>
                                        <td>sqrt(x)</td>
                                        <td>Calcula a raiz quadrada de um número.</td>
                                        <td>sqrt(8)</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </Tab>
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Funções Trigonométricas"
                        >
                            <Table>
                                <thead>
                                    <tr>
                                    <th data-field="funcao">
                                        Função
                                    </th>
                                    <th data-field="descricao">
                                        Descrição
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>acos(x)</td>
                                        <td>Calcula o cosseno inverso de um valor.</td>
                                    </tr>
                                    <tr>
                                        <td>acosh(x)</td>
                                        <td>Arco hiperbólico, definida como: acosh(x) = ln(sqrt(x^2 - 1) + x).</td>
                                    </tr>
                                    <tr>
                                        <td>acot(x)</td>
                                        <td>Cotangente, definida como: acot(x) = atan(1/x).</td>
                                    </tr>
                                    <tr>
                                        <td>acoth(x)</td>
                                        <td>Arco cotangente hiperbólica, definida como: acoth(x) = atanh(1/x) = (ln((x+1)/x) + ln(x/(x-1))) / 2.</td>
                                    </tr>
                                    <tr>
                                        <td>acsc(x)</td>
                                        <td>Cossecante inversa, definida como: acsc(x) = asin(1/x).</td>
                                    </tr>
                                    <tr>
                                        <td>acsch(x)</td>
                                        <td>Arco cossecante hiperbólica, definida como: acsch(x) = asinh(1/x) = ln(1/x + sqrt(1/x^2 + 1)).</td>
                                    </tr>
                                    <tr>
                                        <td>asec(x)</td>
                                        <td>Secante inversa.</td>
                                    </tr>
                                    <tr>
                                        <td>asech(x)</td>
                                        <td>Arco secante hiperbólica, definida como: asech(x) = acosh(1/x) = ln(sqrt(1/x^2 - 1) + 1/x).</td>
                                    </tr>
                                    <tr>
                                        <td>asin(x)</td>
                                        <td>Seno inverso.</td>
                                    </tr>
                                    <tr>
                                        <td>asinh(x)</td>
                                        <td>Arco seno hiperbólico, definida como: asinh(x) = ln(x + sqrt(x^2 + 1)).</td>
                                    </tr>
                                    <tr>
                                        <td>atan(x)  </td>
                                        <td>Tangente inversa.</td>
                                    </tr>
                                    <tr>
                                        <td>atan2(y, x)  </td>
                                        <td>Tangente inversa com dois argumentos: y/x.</td>
                                    </tr>
                                    <tr>
                                        <td>atanh(x)</td>
                                        <td>Arco tangente hiperbólica, definida como: atanh(x) = ln((1 + x)/(1 - x)) / 2.</td>
                                    </tr>
                                    <tr>
                                        <td>cos(x)</td>
                                        <td>Cosseno.</td>
                                    </tr>
                                    <tr>
                                        <td>cosh(x)</td>
                                        <td>Cosseno hiperbólico, definida como: cosh(x) = 1/2 * (exp(x) + exp(-x)).</td>
                                    </tr>
                                    <tr>
                                        <td>cot(x)</td>
                                        <td>Cotangente.</td>
                                    </tr>
                                    <tr>
                                        <td>coth(x)</td>
                                        <td>Cotangente hiperbólica, definida como: coth(x) = 1 / tanh(x).</td>
                                    </tr>
                                    <tr>
                                        <td>csc(x)</td>
                                        <td>Cossecante, definida como: csc(x) = 1/sin(x).</td>
                                    </tr>
                                    <tr>
                                        <td>csch(x)</td>
                                        <td>Cossecante hiperbólica, definida como: csch(x) = 1 / sinh(x).</td>
                                    </tr>
                                    <tr>
                                        <td>sec(x)</td>
                                        <td>Secante, definida como: sec(x) = 1/cos(x).</td>
                                    </tr>
                                    <tr>
                                        <td>sech(x)</td>
                                        <td>Secante hiperbólica, definida como: sech(x) = 1 / cosh(x).</td>
                                    </tr>
                                    <tr>
                                        <td>sin(x)</td>
                                        <td>Seno.</td>
                                    </tr>
                                    <tr>
                                        <td>sinh(x)</td>
                                        <td>Seno hiperbólico, definida como: sinh(x) = 1/2 * (exp(x) - exp(-x)).</td>
                                    </tr>
                                    <tr>
                                        <td>tan(x)</td>
                                        <td>Tangente.</td>
                                    </tr>
                                    <tr>
                                        <td>tanh(x)</td>
                                        <td>Tangente hiperbólica, definida como: tanh(x) = (exp(2 * x) - 1) / (exp(2 * x) + 1).</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </Tab>
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Constantes"
                        >
                            <Table>
                                <thead>
                                    <tr>
                                    <th data-field="constante">
                                        Constante
                                    </th>
                                    <th data-field="descricao">
                                        Descrição
                                    </th>
                                    <th data-field="valor">
                                        Valor
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>e,E</td>
                                        <td>Número de Euler, base do logaritmo natural.</td>
                                        <td>2.718281828459045</td>
                                    </tr>
                                    <tr>
                                        <td>i</td>
                                        <td>Unidade imaginária.</td>
                                        <td>sqrt(-1)</td>
                                    </tr>
                                    <tr>
                                        <td>Infinity</td>
                                        <td>Infinito.</td>
                                        <td>Infinito</td>
                                    </tr>
                                    <tr>
                                        <td>LN2</td>
                                        <td>Logaritmo natural de 2.</td>
                                        <td>0.6931471805599453</td>
                                    </tr>
                                    <tr>
                                        <td>LN10</td>
                                        <td>Logaritmo natural de 10.</td>
                                        <td>2.302585092994046</td>
                                    </tr>
                                    <tr>
                                        <td>phi</td>
                                        <td>Proporção áurea, definida como (1 + sqrt(5)) / 2</td>
                                        <td>1.618033988749895</td>
                                    </tr>
                                    <tr>
                                        <td>pi, PI</td>
                                        <td>Pi.</td>
                                        <td>3.141592653589793</td>
                                    </tr>
                                    <tr>
                                        <td>SQRT1_2</td>
                                        <td>Retorna a raiz quadrada de 1/2.</td>
                                        <td>0.7071067811865476</td>
                                    </tr>
                                    <tr>
                                        <td>SQRT2</td>
                                        <td>Retorna a raiz quadrada de 2.</td>
                                        <td>1.4142135623730951</td>
                                    </tr>
                                    <tr>
                                        <td>tau</td>
                                        <td>Tau, definido como 2 * pi.</td>
                                        <td>6.283185307179586</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </Tab>
                    </Tabs>
            </Col>
            </Row>
        </CardPanel>
      </div>
    </Row>
  );
}
