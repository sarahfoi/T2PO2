import { evaluate } from "mathjs";

import Uniforme from "./Uniforme";
import Bissecao from "./Bissecao";

const metodos = {
  Uniforme,
  Bissecao
};

export default (metodo, { f, ...args }) =>
  metodos[metodo]({fstring: f, f: (x) => evaluate(f, { x }), ...args });
