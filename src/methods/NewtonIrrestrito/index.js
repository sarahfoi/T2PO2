import {
    sqrt,
    sum,
    derivative,
    round,
    squeeze,
    transpose,
    multiply,
    identity,
    add,
    subtract,
    divide,
    matrix,
    evaluate,
    inv
  } from "mathjs";

const gradienteX = (gradiente, escopo) => {
    let arr = [];
    gradiente.forEach((expression) => {
      let val = expression.evaluate(escopo);
      if (isNaN(val)) return undefined;
      arr.push(val);
    });
    return arr;
  };

  const norma = (gradiente, escopo) => {
    let sum = 0;
    console.log(gradiente, escopo);
    gradiente.forEach(
      (expression) => (sum += Math.pow(expression.evaluate(escopo), 2))
    );
    console.log("norma: " + Math.sqrt(sum));
    return Math.sqrt(sum);
  };

export default async ({ f, xinicial, newton, variaveis, e }) =>
  new Promise((resolve, reject) => {
    let n = xinicial.length;
    let x = [...xinicial];
    let v=true;
    let g = [],
        H = [],
        escopo = [],
        gx = [],
        Hx;
    let k=0;
    let xprox = [];
    for (let i = 1; i <= n; i++) g.push(derivative(f, "x" + i)); //calculo do gradiente
    for (let i = 1; i <= n; i++) { //calculo da hessiana
      let linha = [];
      for (let j = 1; j <= n; j++)
        linha.push(derivative(g[i - 1].toString(), "x" + j).toString());
      H.push(linha);
    }
    escopo = variaveis(x);
    console.log("x: "+x);
    console.log("g: "+g);
    while(norma(g,escopo)>e && v) {
        if (k>0) x=[...xprox]
        console.log("x: "+x);
        if(k>500) {
            reject('Não foi possível calcular o mínimo');
            break;
        }
        gx = gradienteX(g, escopo); //calculo do gradiente em x
        console.log('gx: '+gx);
        Hx = matrix(H.map((arr) => arr.map((el) => evaluate(el, escopo))));
        console.log('Hx: '+Hx);
        xprox=squeeze(add(x,multiply(multiply(-1,gx),inv(Hx))));
        xprox=xprox._data;
        console.log('xprox: '+xprox);
        escopo = variaveis(xprox);
        console.log('escopo: '+escopo);
        if(sqrt(sum(multiply(subtract(xprox, x), subtract(xprox, x))))<e){
            console.log("subtração: "+subtract(xprox, x));
            console.log("ao quadrado: "+multiply(subtract(xprox, x),subtract(xprox, x)));
            console.log("soma: "+sum(multiply(subtract(xprox, x), subtract(xprox, x))));
            v=false;
        }
        k++;
    }
    resolve(xprox.map((el) => round(el, 5)));
});