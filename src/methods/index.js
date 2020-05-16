import { evaluate } from "mathjs";

import Uniforme from "./Uniforme";
import Bissecao from "./Bissecao";
import Fibonacci from "./Fibonacci";
import Dicotomica from "./Dicotomica";
import Newton from "./Newton";


const metodos = {
  Uniforme,
  Bissecao,
  Fibonacci,
  Dicotomica,
  Newton
};

export default (metodo, { f, ...args }) =>
  metodos[metodo]({fstring: f, f: (x) => evaluate(f, { x }), ...args });
