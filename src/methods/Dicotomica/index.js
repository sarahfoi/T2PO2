import { round } from "mathjs";

export default async ({ f, a, b, d, e }) =>
  new Promise((resolve, reject) => {
    let x,
      z,
      fx,
      fz,
      k = 1;

    while (b - a >= e) {
      if (k === 10000) reject("Não foi possível encontrar o mínimo");
      x = (a + b) / 2 - d;
      z = (a + b) / 2 + d;
      fx = f(x);
      fz = f(z);
      fx > fz ? (a = x) : (b = z);
      k++;
    }

    if (typeof a !== "undefined" && typeof b !== "undefined")
      resolve(round((a + b) / 2, 5));
    reject("Não foi possível encontrar o mínimo");
  });
