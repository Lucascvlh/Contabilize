function cadastrarTransacao(){
  var dados = new Object;
  valor = document.getElementById('valor').value
  if(valor > 0){
    dados.id = document.getElementById('id').value;
    dados.valor = document.getElementById('valor').value;
    dados.nome_transacao = document.getElementById('nome_transacao').value;
    function update(){
      var select = document.getElementById('tipo_receita');
      var option = select.options[select.selectedIndex];
      dados.tipo_receita = option.text;
    }
    update();
    var request = new XMLHttpRequest()
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
    alert(`Transação inserido com sucesso`)
    window.location.href ='tipoReceita.html'
  } else {
    alert('Insira valor maior que 0(zero)')
  }  
}

function carregarTransacao() {
  var email = 'luikinha_henrique@hotmail.com'
  let linhaTop = `<div class="container">
              <div class="row align-items-center">
                <div class="col text-center bg-dark text-white border">
                  Nome Usuário
                </div>
                <div class="col text-center bg-dark text-white border">
                  Descrição
                </div>
                <div class="col text-center bg-dark text-white border">
                  Tipo Receita
                </div>
                <div class="col text-center bg-dark text-white border">
                  Valor
                </div>
                <div class="col text-center bg-dark text-white border">
                  Remover
                </div>
              </div>
            </div>`
  document.getElementById('cabecalho').innerHTML = linhaTop;
  // vamos consumir a API
  // cria um objeto para fazer a requisição
  var request = new XMLHttpRequest()
      // faz a conexão
  request.open('GET', 'http://localhost:8080/usuario', true)
      // processa a resposta
  request.onload = function() {
          // obter os dados JSON do servidor
          // this.response contém os dados
          // converto para JSON
          var transacao = JSON.parse(this.response)
          if ((request.status >= 200) && (request.status < 400)) {
              // sucesso
              linhaCorpo = ''; 
              var soma = 0;
              transacao.forEach(transacao => {
                if(transacao.tipo_receita == 'Entrada'){
                  soma += transacao.valor;
                } else {
                  soma -= transacao.valor;
                }
                if(transacao.email == email){
                  var nome = transacao.nome;
                }
                if(transacao.tipo_receita == 'Entrada'){
                  if(transacao.valor > 0){
                    linhaCorpo += `<div class="container">
                      <div class="row align-items-center">
                        <div class="col text-center bg-primary text-white border">
                          <span>${nome}</span>
                        </div>
                        <div class="col text-center bg-primary text-white border">
                          <span>${transacao.nome_transacao}</span>
                        </div>
                        <div class="col text-center bg-primary text-white border">
                          <span>${transacao.tipo_receita}</span>
                        </div>
                        <div class="col text-center bg-primary text-white border">
                          <span>R$ ${transacao.valor}</span>
                        </div>
                        <div class="col text-center bg-primary text-white border">
                          <img src="remove2.png" onclick="remover(${transacao.id_nome})">
                        </div>
                      </div>
                    </div>`
                  }
                } else {
                  if(transacao.valor > 0){
                    linhaCorpo += `<div class="container">
                    <div class="row align-items-center">
                      <div class="col text-center bg-danger text-white border">
                        <span>${nome}</span>
                      </div>
                      <div class="col text-center bg-danger text-white border">
                        <span>${transacao.nome_transacao}</span>
                      </div>
                      <div class="col text-center bg-danger text-white border">
                        <span>${transacao.tipo_receita}</span>
                      </div>
                      <div class="col text-center bg-danger text-white border">
                        <span>R$ -${transacao.valor}</span>
                      </div>
                      <div class="col text-center bg-danger text-white border">
                        <img src="remove2.png" onclick="remover(${transacao.id_nome})">
                      </div>
                    </div>
                  </div>`
                  }  
                }
              });
              if(soma > 0){
                let linhaBaixo = `<div class="container">
                  <div class="row justify-content-end">
                    <div class="col-4 text-center bg-dark text-white border">
                      Total
                    </div>
                    <div class="col-4 text-center bg-primary text-white border">
                      <span>R$ ${soma}</span>
                    </div>
                  </div>
                </div>`
                document.getElementById('saldo').innerHTML = linhaBaixo;
              } else if(soma == 0){
                let linhaBaixo = `<div class="container">
                  <div class="row justify-content-end">
                    <div class="col-4 text-center bg-dark text-white border">
                      Total
                    </div>
                    <div class="col-4 text-center bg-success text-white border">
                      <span>R$ ${soma}</span>
                    </div>
                  </div>
                </div>`
                document.getElementById('saldo').innerHTML = linhaBaixo;
              } else{
                let linhaBaixo = `<div class="container">
                  <div class="row justify-content-end">
                    <div class="col-4 text-center bg-dark text-white border">
                      Total
                    </div>
                    <div class="col-4 text-center bg-danger text-white border">
                      <span>R$ ${soma}</span>
                    </div>
                  </div>
                </div>`
                document.getElementById('saldo').innerHTML = linhaBaixo;
              }
          } 
        document.getElementById('corpo').innerHTML = linhaCorpo;
      }
  request.send();
}

function exit(){
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8080/usuario', true)
  request.onload = function() {
          var transacao = JSON.parse(this.response)
          
          if ((request.status >= 200) && (request.status < 400)) {
            var soma = 0;
            transacao.forEach(transacao => {
              if(transacao.tipo_receita == 'Entrada'){
                soma += transacao.valor;
              } else {
                soma -= transacao.valor;
              }
            })
            if(soma >= 0){
              window.location.href = 'index.html'
            } else {
              alert('Impossível sair! \nSó pode sair se o saldo foi igual ou maior que 0!')
            }
          }
  }
  request.send();
}

function remover(id) {
  var request = new XMLHttpRequest()
  request.open('DELETE', `http://localhost:8080/usuario/${id}`, true)
  request.onload = function() {
      if ((request.status >= 200) && (request.status < 400)) {
          console.log(`Conexão ocorreu com sucesso`)
      } else {
          console.log(`Conexão com problema`)
      }
  }
  // envia a requisição
  request.send()
  alert(`Transação removido com sucesso!`)
  //atualiza a lista de games
  location.reload()
}