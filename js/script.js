
//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

console.log(botaoEntrar);


//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.
botaoEntrar.addEventListener("click", function(){
    console.log("Botão de entrar clicado");


    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("senha"))
    






});
