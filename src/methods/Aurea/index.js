import { round } from "mathjs";

export default async ({ f, a, b, e }) =>
  new Promise((resolve, reject) => {
    let alfa = 0.618;
    let beta = 0.382;
    let x = a;
    let y = b;
    let fm;
    let fl;
    let micra = x + (y - x) * beta;
    let lambda = x + (y - x) * alfa;
    let i = 0;

    while (y - x  >= e) {
      if (i === 10000) reject("Não foi possível encontrar o mínimo");
      fm = f(micra);
      fl = f(lambda);
      if (fm > fl) {
        x = micra;
        micra = lambda;
        lambda = x + (y - x) * alfa;
      } else {
        y = lambda;
        lambda = micra;
        micra = x + (y - x) * beta;
      }
      i++;
    }

    if (typeof (x + y) !== "undefined") resolve(round((x + y) / 2,5));
    reject("Não foi possível encontrar o mínimo");
  });
