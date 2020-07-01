import {
  derivative,
  round,
  matrix,
  evaluate,
  squeeze,
  transpose,
  multiply,
} from "mathjs";

const norma = (gradiente, escopo) => {
  let sum = 0;
  console.log(gradiente, escopo);
  gradiente.forEach(
    (expression) => (sum += Math.pow(expression.evaluate(escopo), 2))
  );
  return Math.sqrt(sum);
};

const gradienteX = (gradiente, escopo) => {
  let arr = [];
  gradiente.forEach((expression) => {
    let val = expression.evaluate(escopo);
    if (isNaN(val)) return undefined;
    arr.push(val);
  });
  return arr;
};

export default async ({ f, xinicial, newton, variaveis, e }) =>
  new Promise((resolve, reject) => {
    //f = string, xinicial = [x1,x2,x3...], newton = function(string)=> minimo da funcao ,e = number , variaveis = function(x[]) => retorna o escopo (Object)
    let n = xinicial.length;
    let g = [];
    let d = [];
    for (let i = 1; i <= n; i++) g.push(derivative(f, "x" + i));
    console.log(g);

    let H = [];
    for (let i = 1; i <= n; i++) {
      let linha = [];
      for (let j = 1; j <= n; j++)
        linha.push(derivative(g[i - 1].toString(), "x" + j).toString());
      H.push(linha);
    }
    console.log(H);

    let r,
      k = 1;
    let x = [...xinicial];
    console.log(x);
    let escopo = variaveis(x);
    const time = Date.now();//parada de execução por tempo

    while (norma(g, escopo) > e) {
      let gx = gradienteX(g, escopo);
      d = gx.map((el) => -el);
      if (k === 200 || typeof d === "undefined") {
        reject("Não foi possível calcular o mínimo");
        break;
      }
      if (Date.now() - time >= 5000) {
        reject(
          "Tempo Excedido, x mais próximo: (" +
            x.map((el) => round(el, 5))
              .toString()
              .replace(new RegExp(",", "gi"), " ") +
            ")"
        );
        break;
      }

      let Hx = matrix(H.map((arr) => arr.map((el) => evaluate(el, escopo))));
      console.log("H(x):", Hx);
      console.log("k = " + k, x);

      for (let i = 1; i <= n; i++) {
        let xprox = [];
        console.log("direcao: " + d);
        console.log("gradiente de x: " + gx);
        r =
          -gx.reduce((acumulador, el, index) => acumulador + el * d[index], 0) /
          squeeze(multiply(multiply(transpose(d), Hx), d));

        console.log(r);
        if (typeof r === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
        for (let i = 0; i < n; i++) xprox.push(x[i] + r * d[i]); // xk+1 = xk + lambda*dk
        console.log(xprox);

        escopo = variaveis(xprox);
        gx = gradienteX(g, escopo);
        if (i < n) {
          let b =
            squeeze(multiply(multiply(transpose(gx), Hx), d)) /
            squeeze(multiply(multiply(transpose(d), Hx), d));
          console.log(b);
          d = d.map((v, i) => -gx[i] + b * v);
          console.log(d);
        }
        x = xprox;
      }
      k++;
    }
    if (typeof d === "undefined") reject("Não foi possível calcular o mínimo");
    console.log("x*= " + x);
    resolve(x.map((el) => round(el, 5)));
  });
