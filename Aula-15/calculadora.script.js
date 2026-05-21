document.writeln("olá mundo!");
document.writeln("<h2>Bem-vindo ao javaScript</h2>");
window.alert ("esta é")
document.getElementById("title").innerHTML = "Aprendendo JavaScript com o melhor professor da UVV!";

let nome = prompt ("digite seu nome:");
document.getElementById("novafrase").innerHTML = "Olá," + nome + "! Seja bem vindo ao javascript!";
document.getElementById("novafrase").style.color = "blue";
document.getElementById("novafrase").style.fontSize = "88px";
document.getElementById("novafrase").style.setProperty("color", "blue", "important");

function exibirmensagem (){
    Let nome = document.getElementById(nome).value;
    document.getElementById("novafrase").innerHTML = "Olá," + nome + "! Seja bem-vindo ao Javacript!";
    document.getElementById("novafrase").style.color = "green";
    document.getElementById("novafrase").style.fontSize ="50px";
}