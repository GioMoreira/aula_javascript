
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar.</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por cliclar.")
}

function redirecionar(){
    window.open("https://www.pirple.com/"); // abre em outra aba
    window.location.href =  "https://www.pirple.com/"; // abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function  soma(n1, n2){
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getHours());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count)
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++; // recebe ele mesmo + 1
}
*/

/*
var idade = prompt("Qual sua idade? ");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"},
{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista);
//console.log(lista[1]);
//alert(lista[0]);
///lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));


//var nome = "Giovanna Moreira";
//var idade = 22;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade+idade2)
//console.log(nome);
//console.log(idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

