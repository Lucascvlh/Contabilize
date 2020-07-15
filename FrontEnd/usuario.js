function cadastrar(){
  var dados = new Object;
  dados.nome = document.getElementById("nome").value
  dados.email = document.getElementById("email").value
  dados.senha = document.getElementById("senha").value
  dados.id = document.getElementById("id").value

  var request = new XMLHttpRequest()
      // faz a conexão
  request.open('POST', 'http://localhost:8080/usuario', true)
  request.onload = function() {
          if ((request.status >= 200) && (request.status < 400)) {
              console.log(`Conexão ocorreu com sucesso`)
          } else {
              console.log(`Conexão com problema`)
          }
      }
      // configura o cabeçalho da requisição com conteúdo do tipo JSON
  request.setRequestHeader("Content-Type", "application/json")
      // envia a requisição
  request.send(JSON.stringify(dados));
  alert(`Usuário inserido com sucesso`)
  location.href = 'index.html'
}

function autenticar(){
    const nome = document.getElementById("nome").value
    const senha = document.getElementById("senha").value
    var request = new XMLHttpRequest()
      // faz a conexão
    request.open('GET', 'http://localhost:8080/usuario', true)
    request.onload = function(){
        var usuario = JSON.parse(this.response)
          if ((request.status >= 200) && (request.status < 400)){
              usuario.forEach(usuario =>{
                  if(nome == usuario.email){
                      if(senha == usuario.senha){
                          window.location.href = 'tipoReceita.html'
                      } else if(senha == ''){
                        alert('Insira sua senha')
                      } 
                      else{
                          alert('Dados inválidos')
                      }
                  } 
              })
          }
    }
    request.send();
}