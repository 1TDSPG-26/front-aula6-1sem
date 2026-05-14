
//Objeto INTERNO
const usuarioUm = {
    email:"email@email.com",
    senha:"12345",
    nome: "José Antonio",
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
}


//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.

botaoEntrar.addEventListener("click", function(e){
    
    e.preventDefault();

    //Para casa:
    //Capturar os campos de email e senha.
    //Armazenar em variáveis.
    //Imprimir seus valores.
    const inputEmail = document.querySelector("#idEmail");
    const inputSenha = document.querySelector("#idSenha");
    
    //Armazenar os dados que chegam do form em um objeto:
    const userForm = {
        email: inputEmail.value,
        senha: inputSenha.value
    }

    //Validação
    try {

        if (usuarioUm) {

            if( (usuarioUm.email === userForm.email) && (usuarioUm.senha === userForm.senha)){
                alert("Login realizado com sucesso!");
                //Redirecionamento do usuário para uma nova página!!
                window.location.href = "../index.html";
            }else{
                throw Error("Email ou Senha incorretos.");
            }
            
        }else{
            throw Error("Ocorreu um erro no acesso as informações do usuário.");
        }

    } catch (error) {
        console.error(error);
        alert(error);
    }

});
