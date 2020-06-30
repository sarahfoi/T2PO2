
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
  round
} from "mathjs";

export default async ({ f, xinicial, newton, variaveis, e }) =>
  new Promise((resolve, reject) => {
    let f2;
    let n = xinicial.length;
    let x = [...xinicial];
    let d = identity(n);
    let k=0,r;
    let aux;
    let xprox;
    let v=true;
    let M;
    let y=[...x];
    while(v) {
      if (k === 200) {
        reject("Não foi possível calcular o mínimo");
        break;
      }
      if (k > 0) x = [...xprox];
      for (let i = 1; i <= n; i++) {
        f2 = f;
        for (let j = 1; j <= n; j++) {
          aux = "x" + j;
          f2 = f2.replace(
            new RegExp(aux, "gi"),
            "(" +
              y[j - 1].toString() +
              "+x*" +
              squeeze(subset(d, index(i - 1, j - 1))) +
              ")"
          );
        }
        r = newton(f2, 0, 0.000001);
        console.log('lambda1:'+r);
        if (typeof r === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
        y = add(y, multiply(r, squeeze(column(d, i - 1))));
        y=y._data;
      }
      xprox = [...y];
      k++;
      if (sqrt(sum(multiply(subtract(xprox, x), subtract(xprox, x)))) > e){
        console.log('x:'+x);
        console.log('xprox:'+xprox);
        M=subtract(xprox, x);
        console.log('M:'+M);
        f2 = f;
        for (let j = 1; j <= n; j++) {
          aux = "x" + j;
          f2 = f2.replace(
            new RegExp(aux, "gi"),
            "(" +
              y[j - 1].toString() +
              "+x*" +
              M[j-1] +
              ")"
          );
        }
        r = newton(f2, 0, 0.000001);
        console.log('lambda2:'+r);
        if (typeof r === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
        y = [...add(y, multiply(r,M))];
      }
      else{
        v=false;
      }
    }
    resolve(xprox.map((el) => round(el, 5)));
  });