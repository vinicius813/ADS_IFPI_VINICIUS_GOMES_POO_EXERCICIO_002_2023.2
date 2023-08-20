/* As templates strings são strings que permitem expressões embutidas. Você pode utilizar
string multi-linhas e interpolação de strings com elas. */
/* É uma nova forma de criar strings e tornar o seu código um pouco mais legível. Template
Strings são envolvidas por acentos graves(`´) em vez de aspas simples ou duplas. Template Strings
podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves (${expression}).
*/
var Aula = /** @class */ (function () {
    function Aula() {
        this.nomeProfessor = "Ely";
        this.payment = 120.56;
        this.languagePreffer = "TypeScript";
    }
    Aula.prototype.ministrar = function (nomeProfessor) {
        this.nomeProfessor = nomeProfessor;
    };
    Aula.prototype.salario = function (payment) {
        this.payment = payment;
    };
    Aula.prototype.preferencia = function (languagePreffer) {
        this.languagePreffer = languagePreffer;
    };
    return Aula;
}());
var aula = new Aula();
aula.ministrar("Ely \n");
console.log(aula.nomeProfessor);
var aula1 = new Aula();
aula1.salario(120.56);
console.log("My payment time is ".concat(aula1.payment));
console.log("and \n");
var aula2 = new Aula();
aula2.preferencia("TypeScript");
console.log("my preffered language is ".concat(aula2.languagePreffer));
