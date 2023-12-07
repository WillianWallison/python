document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formViagem');
    const listaViagens = document.getElementById('listaViagens');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const destino = document.getElementById('destino').value;
      const partida = document.getElementById('partida').value;
      const retorno = document.getElementById('retorno').value;
      const nota = document.getElementById('nota').value;
  
      const viagem = {
        nome,
        destino,
        partida,
        retorno,
        nota
      };
  
      // Verifica se já existem viagens no localStorage
      let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
  
      viagens.push(viagem);
  
      localStorage.setItem('viagens', JSON.stringify(viagens));
  
      listarViagens();
      form.reset();
    });
  
    function listarViagens() {
      listaViagens.innerHTML = '';
  
      const viagens = JSON.parse(localStorage.getItem('viagens')) || [];
  
      viagens.forEach((viagem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>Nome:</strong> ${viagem.nome}<br>
          <strong>Destino:</strong> ${viagem.destino}<br>
          <strong>Partida:</strong> ${viagem.partida}<br>
          <strong>Retorno:</strong> ${viagem.retorno}<br>
          <strong>Nota:</strong> ${viagem.nota}<br>
          <button onclick="excluirViagem(${index})">Excluir</button>
          <hr>
        `;
        listaViagens.appendChild(li);
      });
    }
  
    listarViagens();
  
    // Função para excluir uma viagem
    window.excluirViagem = function(index) {
      let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
      viagens.splice(index, 1);
      localStorage.setItem('viagens', JSON.stringify(viagens));
      listarViagens();
    };
  });