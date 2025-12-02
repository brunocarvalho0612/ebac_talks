AOS.init();

const dataDoEvento = new Date("Dec 06, 2025 20:00:00");
const contador = document.getElementById('contador');

function atualizaContador() {
  const agora = new Date();
  const diferenca = dataDoEvento - agora;

  if (diferenca <= 0) {
    contador.innerHTML = "O evento já começou! 🚀";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  contador.innerHTML = `
    O maior evento de tecnologia do Brasil começa em 
    <strong>${dias}d</strong>
    <strong>${horas}h</strong>
    <strong>${minutos}m</strong>
    <strong>${segundos}s</strong>
  `;
}

atualizaContador();
setInterval(atualizaContador, 1000);
