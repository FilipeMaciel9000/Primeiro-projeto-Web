function exibirPrograma() {
  const texto = mensagem.value.trim().toLowerCase();

  const exibir = document.getElementById('exibir');

  if (!texto) {
    exibir.textContent =
      'Por favor, insira Olá Mundo para se livrar da maldição.';
  } else if (texto === 'olá mundo') {
    exibir.innerHTML = `Você escreveu "${mensagem.value}" na tela!<br>Parabéns, você se livrou da maldição!<br>Bem-vindo ao JavaScript!`;
  } else {
    exibir.textContent =
      'Por favor, insira Olá Mundo para se livrar da maldição.';
  }
}
