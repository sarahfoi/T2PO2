import {round} from 'mathjs';

export default async({f,a,b,d}) => new Promise((resolve,reject) => {
    let x = a;
    let i = 0;
    let ant = f(x);
    let fx=0;
    let flag= false;
    while(x<=b && i < 10000){
        x+=d;
        fx = f(x);
        if(fx > ant){
            if(flag)
                return resolve(round(x- d,5));
            if(i<2) x= a;
            else x-=2*d;
            fx = f(x);
            flag=true;
            d*=0.1;
        }
        ant = fx;
        i++;
    }
    if(i < 10001)return resolve(round(x-d,5));
    return reject(new Error("Não foi possível localizar o mínimo da função"));
})