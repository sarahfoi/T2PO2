import { derivative, round } from "mathjs";

const norma = (gradiente, escopo) => {
  //Calcula norma e direcao, retorna em um objeto
  let sum = 0;
  let d = [];
  console.log(gradiente, escopo);
  gradiente.forEach((expression, index) => {
    d.push(-expression.evaluate(escopo));
    if (typeof d[index] === "undefined") {
      return { norma: 0, direcao: undefined };
    }
    sum += Math.pow(d[index], 2);
  });
  return { norma: Math.sqrt(sum), direcao: [...d] };
};

export default async ({ f, xinicial, newton, variaveis, e }) =>
  new Promise((resolve, reject) => {
    //f = string, xinicial = [x1,x2,x3...], newton = function(string)=> minimo da funcao ,e = number , variaveis = function(x[]) => retorna o escopo (Object)
    let n = xinicial.length;
    let g = [];
    let d = [];
    for (let i = 1; i <= n; i++) g.push(derivative(f, "x" + i));
    console.log(g);
    let f2;
    let r,
      k = 1;
    let aux;
    let x = [...xinicial];
    console.log(x);
    let obj;
    const time = Date.now();//parada de execução por tempo

    while (((obj = norma(g, variaveis(x))), obj.norma > e)) {
      if (k === 200 || typeof obj.direcao === "undefined") {
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
      d = [...obj.direcao];
      console.log("direcao: " + d);
      console.log("k = " + k, x);
      f2 = f;
      for (let j = 1; j <= n; j++) {
        // substituição de x1,x2 por xk + d * lambda (x)
        aux = "x" + j;
        //aux = x1, xinicial[0]+x*1
        f2 = f2.replace(
          new RegExp(aux, "gi"),
          "(" + x[j - 1].toString() + "+x*" + d[j - 1] + ")"
        );
      }
      console.log(f2);

      r = newton(f2, 0); // encontra lambda

      console.log(r);
      if (typeof r === "undefined") {
        r = newton(f2, 2);
        if (typeof r === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
      }
      for (let i = 0; i < n; i++) x[i] += r * d[i]; // xk+1 = xk + lambda*dk

      console.log(x);
      k++;
    }
    if (typeof d === "undefined") reject("Não foi possível calcular o mínimo");
    console.log("x*= " + x);
    resolve(x.map((el) => round(el, 5)));
  });
