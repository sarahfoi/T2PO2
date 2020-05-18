import {abs} from "mathjs";

export default async({f,a,b}) => new Promise((resolve,reject) => {
    let x = a;
    let fx=0;
    let pontos = [];
    //
    let d = abs(a-b)/10;
    while(x<=b+0.0001){
        fx = f(x);
        pontos.push({x: x,y:fx});
        x+=d;
    }
    return resolve(pontos);
})