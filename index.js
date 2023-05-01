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
            rua: "rua da frente",
            numero: 100000,
            bairro: "novoBairro",
            estado: "Sao Paulo",
        },   
}

console.log (`${person.name} tem ${person.age} anos e mora no estado de ${person.address.estado}`);




  
