import { derivative,ceil,log2 } from "mathjs";

export default async ({ fstring, f, a, b, e }) =>
  new Promise((resolve, reject) => {
    let n = ceil(log2(1 / (e / (b - a))));
    let flinha = derivative(fstring, "x");
    let x = a;
    let y = b;
    console.log(flinha);
    console.log(flinha.evaluate({ x: x }));
    for (let i = 0; i < n; i++) {
      if (flinha.evaluate({ x: (x + y) / 2 }) > 0) 
        y = (x + y) / 2;
      else 
        x = (x + y) / 2;
    }
    resolve((x + y) / 2);
    reject(new Error("Não foi possível encontrar o mínimo"));
  });
