const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blockSize = 10;
const width = canvas.width / blockSize;
const height = canvas.height / blockSize;
function escreverTextoAnimado(texto) {

  const fonte = '30px Arial';
  ctx.font = fonte;
  ctx.fillStyle = 'white';
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const textWidth = ctx.measureText(texto).width; // Largura do texto
  let x = canvasWidth/2 - textWidth/2; // Centralizar horizontalmente
  let y = canvasHeight/2 + 15; // Adicionar um deslocamento para centralizar verticalmente
  let i = 0;

  function escreverProximaLetra() {
    if (i < texto.length) {
      ctx.fillText(texto[i], x, y);
      i++;
      x += ctx.measureText(texto[i - 1]).width;
      setTimeout(escreverProximaLetra, 100);
    }
  }
  
  escreverProximaLetra();
}
escreverTextoAnimado("Bem Vindo Pedro, este site está sendo desenvolvido!")
