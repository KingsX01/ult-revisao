var botao = document.getElementById("botao")
var cep = document.getElementById("cep")

var logradouro = document.getElementById("logradouro")
var uf = document.getElementById("uf")
var localidade = document.getElementById("localidade")
var bairro = document.getElementById("bairro")

botao.addEventListener("click", (event) => {
    event.preventDefault()
    var usercep = cep.value

    fetch (`https://viacep.com.br/ws/${usercep}/json`)
    .then ((response)=> response.json())
    .then ((endereco)=> {
        logradouro.value = endereco.logradouro
        bairro.value = endereco.bairro
        localidade.value = endereco.localidade
        uf.value = endereco.uf
    } ) 
} )