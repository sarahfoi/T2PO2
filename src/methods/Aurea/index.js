export default async({f,a,b,e}) => {
    let alfa=0.618;
    let beta=0.382;
    let x=a;
    let y=b;
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
            labda=micra;
            micra = x + (y-x)*alfa;
        }
    }
    return (x+y)/2;
}