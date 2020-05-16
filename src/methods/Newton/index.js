import { derivative,round,abs,max } from "mathjs"; 

export default async ({ fstring, f, a, b, e }) =>
  new Promise((resolve, reject) => {
    let flinha = derivative(fstring, "x");
    let f2linha = derivative(flinha,"x"); //observação para mim mesma: testar antes se é C2
    
    let x=a; //x0 = a
    let fxlinha = flinha.evaluate({x: x}); //fxlinha = resultado de flinha(x)
    let fx2linha; //fx2linha = resultado de f2linha(x)

    let z,fzlinha; // z = próximo x

    if(abs(fxlinha)<=e) //testar primeiro critério de parada
        reject(new Error("Não foi possível encontrar o mínimo"));
    
    do{
        fx2linha = f2linha.evaluate({x:x});
        if(fx2linha < 0.00000001) //fx2linha = 0 (tolerância de 10^(-8))
            break;

        z = x - (fxlinha/fx2linha);
        fzlinha = flinha.evaluate({x: z});
        if(abs(fzlinha)<=e)
            break;
            
        if((abs(z-x)/(max(abs(z),1)))<=e)
            break;
        
        x=z;
        fxlinha = fzlinha;    //deixei essa variável só por questão de coesão kk podia usar fxlinha no lugar de fzlinha
    }while(1);

    resolve(round(z,5));
    reject(new Error("Não foi possível encontrar o mínimo"));
  });
