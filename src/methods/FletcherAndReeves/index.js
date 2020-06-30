import {
    derivative,
    round,
    matrix,
    evaluate,
    squeeze,
    transpose,
    multiply,
    add
  } from "mathjs";
  
  const norma = (gradiente, escopo) => {
    let sum = 0;
    console.log(gradiente, escopo);
    gradiente.forEach(
      (expression) => (sum += Math.pow(expression.evaluate(escopo), 2))
    );
    return Math.sqrt(sum);
  };
  
  const gradienteX = (gradiente, escopo) => {
    let arr = [];
    gradiente.forEach((expression) => {
      let val = expression.evaluate(escopo);
      if (isNaN(val)) return undefined;
      arr.push(val);
    });
    return arr;
  };
  
  export default async ({ f, xinicial, newton, variaveis, e }) =>
    new Promise((resolve, reject) => {
      //f = string, xinicial = [x1,x2,x3...], newton = function(string)=> minimo da funcao ,e = number , variaveis = function(x[]) => retorna o escopo (Object)
      let n = xinicial.length; //para passo 2
      let g = []; //gradiente
      let d = []; //direção
      //alert("testeeeeeeeeeeeee");
      
      for (let i = 1; i <= n; i++) g.push(derivative(f, "x" + i)); //calculando as expressões do gradiente
      console.log("g: "+g);
  
      let gx = [],
          gxprox = [],
          xprox = [],
          dprox = [];
      let x = [...xinicial];
      let escopo = variaveis(x);
      let lambda,
          i = 1,
          aux;
      
      console.log("escopo: "+escopo);
      
      let f2;
      while (norma(g, escopo) > e) { //passo 1 - teste de consistencia
        gx = gradienteX(g, escopo); //g = gradiente de x
        d = gx.map((el) => -el); //d = -g
        if (i === 200 || typeof d === "undefined") {
          reject("Não foi possível calcular o mínimo");
          break;
        }
        console.log("gx: "+gx);
        console.log("d: "+d);
        //passo 2
        for (let k = 1; k <= n; k++) { //k de 0 a n-1
          xprox = [];
          dprox = [];
          f2 = f;         

          //A) xk+1 = xk + L*dk
          for(let i = 1; i<=n;i++){ //substituir cada componente de x
            aux = "x" + i;
            f2 = f2.replace(
                new RegExp(aux, "gi"),
                "(" +
                  x[i - 1].toString() +
                  "+x*" +
                  d[i-1] +
                  ")"
              );
          }
          console.log("f2: "+f2);
          lambda = newton(f2, 0, 0.000001); //lambda = min f(xk+lambda*dk)
          console.log("lambda: "+lambda);
          if (typeof lambda === "undefined") {
            reject("Não foi possível calcular o mínimo");
            break;
          }
          console.log("lambda: "+lambda);
          for (let i = 0; i < n; i++) xprox.push(x[i]+lambda*d[i]); //xk+1 = xk + L*dk
          console.log("xprox: "+xprox);


          //B) gk+1 = gradiente(xk+1)
          escopo = variaveis(xprox);
          console.log("escopo: "+escopo);
          gxprox = gradienteX(g, escopo);
          console.log("gxprox: "+gxprox);

          //C)
          if(k < n){
            dprox = add(gxprox.map((el) => -el), multiply(multiply(transpose(gxprox),gxprox)/multiply(transpose(gx),gx),d));
            console.log("dprox: "+dprox);
            d = dprox;
          }          
          x = xprox;
        }
        
        i++;
      }
      if (typeof d === "undefined") reject("Não foi possível calcular o mínimo");
      console.log("x*= " + x);
      resolve(x.map((el) => round(el, 5)));
    });
  