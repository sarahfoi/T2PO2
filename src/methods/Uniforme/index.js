export default async({f,a,b,d}) => new Promise((resolve,reject) => {
    let x = a;
    let i = 0;
    let ant = f(x);
    let fx=0;
    let flag= false;
    while(x<=b){
        x+=d;
        fx = f(x);
        if(fx > ant){
            if(flag)
                return resolve((x- d));
            if(i<2) x= a;
            else x-=2*d;
            fx = f(x);
            flag=true;
            d*=0.1;
        }
        ant = fx;
        i++;
    }
    return resolve(x-d);
    return reject(new Error("Não foi possível localizar o mínimo da função"));
})