console.log('Ola mundo');
// cria um novo elemento input
var input = document.createElement("input");

// define o tipo do input
input.type = "text";

// adiciona o input à página
document.body.appendChild(input);

// Criando um objeto 

const person = {

        name: "Cassio",  
        age: 34,
        sexo: "masculino", 
        address: { 
            rua: "rua *** ******** ***",
            numero: 100000,
            bairro: "**** ********",
            estado: "Sao Paulo",
        },   
}

console.log (`${person.name} tem ${person.age} anos e mora no estado de ${person.address.estado}`);

// Array
console.log('array');

const convidados = ["Pedro" , "Tiago" , "João" , "Lucas" , "Simão"]
console.log( 'convidado presente' , convidados [1]);
console.log('convidado que desmarcou' , convidados[4]);
console.log('convidado a caminho' , convidados[0]); 
const date = new Date();

// Comparação 
console.log ('comparação');

1 > 2; 
1 == 1; 
3 != 4;

var idade = 14; 
var acesso = 18;
var libera = idade > acesso ;
console.log(libera);

// comparadores logicos 
 console.log ('Comparadores Logicos'); 
 console.log(false || false); // false
 console.log(true || false); // true 
 console.log(true || true); // true 
 console.log(false && false); // false
 console.log(true && false); // false
 console.log(true && true); // true 

!false //true
!true // false
!(10>20) 

// desvio de fluxo if (se)

console.log('inicio do programa');

if (1 < 2 && 3 > 2 ) {
console.log('desvio de fluxo');
}

console.log('fim do programa');

// desvio de fluxo else (se nao)

if (1 > 2) {
console.log('desvio 1')
} else {
console.log('desvio 2')   
}














  
