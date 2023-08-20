/* As templates strings são strings que permitem expressões embutidas. Você pode utilizar 
string multi-linhas e interpolação de strings com elas. */

/* É uma nova forma de criar strings e tornar o seu código um pouco mais legível. Template 
Strings são envolvidas por acentos graves(`´) em vez de aspas simples ou duplas. Template Strings
podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves (${expression}).
*/

class Aula {
    nomeProfessor : string = "Ely";
    payment : number = 120.56;
    languagePreffer : string = "TypeScript";

    ministrar(nomeProfessor: string) {
        this.nomeProfessor = nomeProfessor;
    }
    salario(payment : number) {
        this.payment = payment;
    }
    preferencia(languagePreffer : string) {
        this.languagePreffer = languagePreffer;
    }
}

let aula : Aula = new Aula();
aula.ministrar("Ely \n");
console.log(aula.nomeProfessor);

let aula1 : Aula = new Aula();
aula1.salario(120.56);
console.log(`My payment time is ${aula1.payment}\n`);

console.log("and \n");

let aula2 : Aula = new Aula();
aula2.preferencia("TypeScript");
console.log(`my preffered language is ${aula2.languagePreffer}\n`);











