export default async({f,a,b,e}) => new Promise((resolve,reject) =>{
    let alfa=0.618;
    let beta=0.382;
    let x=a;
    let y=b;
    let fm;
    let fl;
    let micra = x + (y-x)*alfa;
    let lambda= x + (y-x)*beta;
    while ((b-a)>e) {
        fm=f(micra);
        fl=f(lambda);
        if(fm>fl){
            x=micra;
            micra=lambda;
            lambda= x + (y-x)*beta;
        }
        else {
            y=lambda;
            lambda=micra;
            micra = x + (y-x)*alfa;
        }
    }
    resolve( (x+y)/2);
    reject(new Error("Não foi possível encontrar o mínimo"))
})