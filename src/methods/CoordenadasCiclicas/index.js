import {
  sqrt,
  add,
  squeeze,
  subset,
  column,
  identity,
  index,
  multiply,
  subtract,
  sum,
  round,
} from "mathjs";

export default async ({ f, xinicial, newton, variaveis, e }) =>
  new Promise((resolve, reject) => {
    //f = string, xinicial = [x1,x2,x3...], newton = function(string)=> minimo da funcao ,e = number , variaveis = function(x[]) => retorna o escopo (Object)
    let n = xinicial.length;
    let d = identity(n);
    let y;
    let f2;
    let r,
      k = 0;
    let aux;
    console.log(xinicial);
    let x = [...xinicial];
    console.log(x);
    let xprox;
    const time = Date.now();//parada de execução por tempo
    do {
      if (k === 500) {
        reject("Não foi possível calcular o mínimo");
        break;
      }
      if (k > 0) x = [...xprox];
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
      y = [...x]; //y1 = xk
      console.log("k = " + k, x);
      for (let i = 1; i <= n; i++) {
        f2 = f;
        for (let j = 1; j <= n; j++) {
          aux = "x" + j;
          //aux = x1, xinicial[0]+x*1
          f2 = f2.replace(
            new RegExp(aux, "gi"),
            "(" +
              y[j - 1].toString() +
              "+x*" +
              squeeze(subset(d, index(i - 1, j - 1))) +
              ")"
          );
          console.log(f2);
        }
        //math.add(array, matrix)
        r = newton(f2, 0);
        console.log(r);
        if (typeof r === "undefined") {
          r = newton(f2, 2);
          console.log(r);
          if (typeof r === "undefined") {
            reject("Não foi possível calcular o mínimo");
            break;
          }
        }
        y = add(y, multiply(r, squeeze(column(d, i - 1)))); //yj+1 = yj+Ljdj
        y = y._data;
        console.log(y);
      }
      xprox = [...y];
      k++;
    } while (sqrt(sum(multiply(subtract(xprox, x), subtract(xprox, x)))) > e);
    console.log("x*= " + xprox);
    resolve(xprox.map((el) => round(el, 5)));
  });
