import { evaluate } from "mathjs";

import Uniforme from "./Uniforme";
import Bissecao from "./Bissecao";
import Fibonacci from "./Fibonacci";


const metodos = {
  Uniforme,
  Bissecao,
  Fibonacci
};

export default (metodo, { f, ...args }) =>
  metodos[metodo]({fstring: f, f: (x) => evaluate(f, { x }), ...args });
