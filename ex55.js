/* /* Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição.
 */
 

 let matriz = [ [10,20,3,4,80,6,7,8,9,23],[1,2,3,4,5,6,7,8,9,27],[1,2,3,4,5,6,7,8,9,50],[1,2,3,4,5,6,7,8,9,18],[1,2,3,4,5,6,7,8,9,17],[1,2,3,4,5,6,7,8,9,16],[1,2,3,4,5,6,7,8,9,15],[1,2,3,4,5,6,7,8,9,14],[1,2,3,4,5,6,7,8,9,13],[1,2,3,4,5,6,7,8,9,12] ];
let maior = matriz[0][0]
let posicio = []
    for(let lin=0; lin<10 ; lin++){
     for(let col=0; col<10 ; col++)
      
if(matriz[lin][col] > maior ){
        maior = matriz[lin][col]
        posiciolinha = lin
        posicaocoluna = col
        linha = matriz[lin]
        var menor = linha[lin]
        for(j=0;j<linha.length;j++){
            
            if(linha[j] < menor){
                menor = linha[j]
            }
            };
        
}

    }
    
  
    

     console.table(matriz);
     console.log("maior:",maior,"posicao linha:",posiciolinha,"posicaocolona:",posicaocoluna);
     console.log("menor:", menor)
    

                      