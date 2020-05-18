import { evaluate } from "mathjs";

import Uniforme from "./Uniforme";
import Bissecao from "./Bissecao";
import Fibonacci from "./Fibonacci";
import Aurea from './Aurea';
import Dicotomica from "./Dicotomica";
import Newton from "./Newton";
import Pontos from './Pontos';


const metodos = {
  Uniforme,
  Bissecao,
  Fibonacci,
  Dicotomica,
  Aurea,
  Newton,
  Pontos
};

export default (metodo, { f,a,b, ...args }) =>{
  if(a>b) [a,b] = [b,a];
   return metodos[metodo]({fstring: f, f: (x) => evaluate(f, { x }),a,b, ...args });
}
