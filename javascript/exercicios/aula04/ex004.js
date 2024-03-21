let primeiraCaracteristica,segundaCaracteristica,terceiraCaracteristica;
const leia = require('readline-sync');

primeiraCaracteristica = leia.question("Escolha entre Vertebrado ou Invertebrado: ");

if(primeiraCaracteristica === "Vertebrado"){

    segundaCaracteristica = leia.question("Escolha entre Ave ou Mamifero: ");
    if(segundaCaracteristica === "Ave"){
        terceiraCaracteristica = leia.question("Escolha entre Carnivoro e Onivoro: ");
        if(terceiraCaracteristica === "Carnivoro"){
            console.log("O animal e uma Aguia");
        }else if(terceiraCaracteristica === "Onivoro"){
            console.log("O animal e um Pombo");
        }
    }else if(segundaCaracteristica === "Mamifero"){
        terceiraCaracteristica = leia.question("Escolha entre Onivoro e Herbivoro: ");
        if(terceiraCaracteristica === "Onivoro"){
            console.log("O animal e um Homem");
        }else if(terceiraCaracteristica === "Herbivoro"){
            console.log("O animal e uma Vaca");
        }
    }else{
        console.log("Digite uma característica válida");
    }

}else if(primeiraCaracteristica === "Invertebrado"){

    segundaCaracteristica = leia.question("Escolha entre Inseto ou Anelideo: ");
    if(segundaCaracteristica === "Inseto"){
        terceiraCaracteristica = leia.question("Escolha entre Hematofago e Herbivoro: ");
        if(terceiraCaracteristica === "Hematofago"){
            console.log("O animal e uma Pulga");
        }else if(terceiraCaracteristica === "Herbivoro"){
            console.log("O animal e uma Lagarta");
        }
    }else if(segundaCaracteristica === "Anelideo"){
        terceiraCaracteristica = leia.question("Escolha entre Hematofago e Onivoro: ");
        if(terceiraCaracteristica === "Hematofago"){
            console.log("O animal e uma Sanguessuga");
        }else if(terceiraCaracteristica === "Onivoro"){
            console.log("O animal e uma Minhoca");
        }
    }else{
        console.log("Digite uma característica válida");
    }

}else{
    console.log("Digite uma característica válida");
}























// let primeiraCaracteristica, segundaCaracteristica;
// let opcao1 = ["Vertebrado", "Invertebrado"];
// let opcao2 = ["Ave", "Mamifero"];
// let opcao3 = ["Inseto", "Anelideo"];
// let opcao4 = ["Carnivoro", "Onivoro"];


// const leia = require('readline-sync');


// primeiraCaracteristica = leia.keyInSelect(opcao1, "Escolha a primeira opção: ");


// if (primeiraCaracteristica !== -1){
//     primeiraCaracteristica = opcao1[primeiraCaracteristica];
    
//     if (primeiraCaracteristica === "Vertebrado"){

//         segundaCaracteristica = leia.keyInSelect(opcao2, "Escolha a segunda opção: ");
//         segundaCaracteristica = opcao2[segundaCaracteristica];
//         if (segundaCaracteristica === "Ave"){
//             terceiraCaracteristica = leia.keyInSelect(opcao4, "Escolha a terceira opção: ");
//             terceiraCaracteristica = opcao4[terceiraCaracteristica];


//         }else if (segundaCaracteristica === "Mamifero"){
//             terceiraCaracteristica = leia.keyInSelect(opcao4, "Escolha a terceira opção: ");
//             terceiraCaracteristica = opcao5[terceiraCaracteristica];

//         }else{
//             console.log('Nenhuma opção válida selecionada.');
// }
//         }

        
//     }else if (primeiraCaracteristica === "Invertebrado"){
//         segundaCaracteristica = leia.keyInSelect(opcao3, "Escolha a segunda opção: ");
//         segundaCaracteristica = opcao3[segundaCaracteristica];
//         console.log(segundaCaracteristica)
//     }else{
//         console.log('Nenhuma opção válida selecionada.');
//     }
// }else{
//     console.log('Nenhuma opção válida selecionada.');
// }