import { evaluate } from "mathjs";

import Uniforme from "./Uniforme";

const metodos = {
  Uniforme,
};

export default (metodo, { f, ...args }) =>
  metodos[metodo]({ f: (x) => evaluate(f, { x }), ...args });
