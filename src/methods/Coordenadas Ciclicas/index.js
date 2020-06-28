import Newton from "../../pages/Newton";
import {identity,sqrt,squeeze,column,add} from "mathjs";


export default async ({f,xinicial,newton,variaveis,e}) =>
    new Promise ((resolve, reject) => {
        //f = string, xinicial = [x1,x2,x3...], newton = function(string)=> minimo da funcao ,e = number , variaveis = function(x[]) => retorna o escopo (Object)
        console.log(xinicial);
        let n = (xinicial.length());
        let d = identity(n);
        let y;
        let f2;
        let r, k = 0;
        let aux;
        let x = xinicial;
        let xprox;
        do {
            k++;
            if(k === 1000) reject('Não foi possível calcular o mínimo');
            x=xprox;
            y=x; //y1 = xk
            for (let i=1;i<=n;i++){
                f2=f;
                for(let j=1;j<=n;j++){
                    aux='x'+(j+1);
                    //aux = x1, xinicial[0]+x*1
                    f2.replaceAll(aux,x[j-1]+"+x*"+d[i][j]);
                }
                //math.add(array, matrix)
                r=newton(f2,1,0.01);
                if(typeof r === 'undefined') reject('Não foi possível calcular o mínimo');
                console.log(y);
                y=add(y,r*squeeze(column(d,i))); //yj+1 = yj+Ljdj
                console.log(y);
            }
            xprox = y;
        }while (sqrt((xprox-x)(xprox-x))>e);
        
        resolve(xprox);
    });