import { derivative, ceil, log2, abs } from "mathjs";

export default async ({ fstring, f, a, b, e }) =>
  new Promise((resolve, reject) => {
    let n = ceil(log2(1 / (e / (b - a))));
    let flinha = derivative(fstring, "x");
    let x = a;
    let y = b;

    for (let i = 0; i < n; i++) {
      const d = flinha.evaluate({ x: (x + y) / 2 });
      if(abs(d) < 0.00000001) break;
      else if (d > 0) y = (x + y) / 2;
      else x = (x + y) / 2;
    }


    if (typeof x !== "undefined" && typeof y !== "undefined")
      resolve((x + y) / 2);
    reject("Não foi possível encontrar o mínimo");
  });
