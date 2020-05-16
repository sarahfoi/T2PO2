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

export default (metodo, { f,a,b, ...args }) =>{
  if(a>b) [a,b] = [b,a];
   return metodos[metodo]({fstring: f, f: (x) => evaluate(f, { x }),a,b, ...args });
}
