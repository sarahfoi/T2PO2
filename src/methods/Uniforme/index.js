import { round } from "mathjs";

export default async ({ f, a, b, d }) =>
  new Promise((resolve, reject) => {
    let x = a;
    let i = 0;
    let ant = f(x);
    let fx = 0;
    let flag = false;

    while (x <= b + 0.0001) {
      if(i === 10000) reject("Não foi possível encontrar o mínimo");
      x += d;
      fx = f(x);
      if (fx > ant) {
        if (flag && typeof x !== "undefined") return resolve(round(x - d, 5));
        if (i < 2) x = a;
        else x -= 2 * d;
        fx = f(x);
        flag = true;
        d *= 0.1;
      }
      ant = fx;
      i++;
    }

    if (typeof x !== "undefined") return resolve(round(x - d, 5));
    reject("Não foi possível encontrar o mínimo");
  });
