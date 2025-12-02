AOS.init();

<<<<<<< HEAD

const dataDoEvento = new Date(2025, 11, 6, 20, 0, 0);


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
=======
const dataDoEvento = new Date("Dec 06, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
  const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / (1000));

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras); {
      document.getElementById('contador').innerHTML = 'Evento expirado';
    }
  }
}, 1000)

>>>>>>> d959810931747defa0f1eed7bdc9ab2aa4a51036
