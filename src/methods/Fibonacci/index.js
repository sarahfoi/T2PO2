import { round } from "mathjs";

export default async ({ f, a, b, e }) =>
  new Promise((resolve, reject) => {

    //Sequencia de Fibonacci e calculo de Fn
    let fn = (b - a) / e;
    let fibo = [1, 1];
    while (fibo[fibo.length - 1] < fn)
      fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    fn = fibo.length - 1;

    //Metodo de Fibonacci
    let u = 0;
    let l = 0;
    let esq = a;
    let dir = b;
    let fu = 0;
    let fl = 0;

    for (let k = 0; k < fn; k++) {
      u = esq + (fibo[fn - k - 2] / fibo[fn - k]) * (dir - esq);
      l = esq + (fibo[fn - k - 1] / fibo[fn - k]) * (dir - esq);
      fu = f(u);
      fl = f(l);
      if (fu > fl) esq = u;
      else dir = l;
    }
    resolve(round((esq + dir) / 2,5));
    reject(new Error("Impossível encontrar o mínimo da função"));
  });
