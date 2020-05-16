import {ceil} from 'mathjs';
import {log} from 'mathjs';
import {derivative} from 'mathjs';

export default async({f,a,b,e}) => new Promise((resolve,reject) =>{
        let n=ceil(1/e/(b-a));
        let flinha=derivativa(f,'x');
        let x=a;
        let y=b;
        for (i=0;i<n;i++){
            if((flinha((x+a)/2))>0)
                y=(x+a)/2;
            else
                x=(x+a)/2;
        }
        resolve( (x+y)/2);
        reject(new Error("Não foi possível encontrar o mínimo"))
    })
