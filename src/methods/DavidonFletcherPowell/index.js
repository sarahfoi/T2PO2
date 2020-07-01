import {
  derivative,
  round,
  squeeze,
  transpose,
  multiply,
  identity,
  add,
  subtract,
  divide,
} from "mathjs";

const norma = (gradiente, escopo) => {
  let sum = 0;
  console.log(gradiente, escopo);
  gradiente.forEach(
    (expression) => (sum += Math.pow(expression.evaluate(escopo), 2))
  );
  console.log("norma: " + Math.sqrt(sum));
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
    let f2;
    for (let i = 1; i <= n; i++) g.push(derivative(f, "x" + i));
    console.log(g);
    const S0 = identity(n);

    let r,
      i = 0,
      k = 0;
    let x = [...xinicial];
    console.log(x);
    let escopo = variaveis(x);
    let S = S0;
    let gx = gradienteX(g, escopo);
    const time = Date.now();//parada de execução por tempo
    while (norma(g, escopo) > e) {
      if (i === 200 || typeof gx === "undefined") {
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
      d = multiply(S, gx)._data.map((el) => -el);
      console.log(d);

      f2 = f;
      for (let j = 1; j <= n; j++) {
        // substituição de x1,x2 por xk + d * lambda (x)
        let aux = "x" + j;
        //aux = x1, xinicial[0]+x*1
        f2 = f2.replace(
          new RegExp(aux, "gi"),
          "(" + x[j - 1].toString() + "+x*" + d[j - 1] + ")"
        );
      }

      r = newton(f2, 0);
      console.log(r);
      if (isNaN(r)) {
        r = newton(f2, 2);
        console.log(r);
        if (isNaN(r)) {
          reject("Não foi possível calcular o mínimo");
          break;
        }
      }

      x = x.map((v, i) => v + r * d[i]);
      console.log(x);
      escopo = variaveis(x);

      if (k < n - 1) {
        let gxprox = gradienteX(g, escopo);
        if (typeof gxprox === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
        let q = gxprox.map((v, i) => [v - gx[i]]);
        let p = d.map((v) => [r * v]);
        console.log(q, p);

        S = subtract(
          add(
            S,
            divide(
              multiply(p, transpose(p)),
              squeeze(multiply(transpose(p), q))
            )
          ),
          divide(
            multiply(multiply(multiply(S, q), transpose(q)), S),
            squeeze(multiply(multiply(transpose(q), S), q))
          )
        );
        console.log(S);
        gx = [...gxprox];
        k++;
      } else {
        S = S0;
        gx = gradienteX(g, escopo);
        i++;
        k = 0;
      }
    }
    if (typeof d === "undefined") reject("Não foi possível calcular o mínimo");
    console.log("x*= " + x);
    resolve(x.map((el) => round(el, 5)));
  });
