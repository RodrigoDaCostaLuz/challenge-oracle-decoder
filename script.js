const criptografar = (texto) => {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

const descriptografar = (texto) => {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const textoOriginal = document
    .getElementById("texto-original")
    .value.trim()
    .toLowerCase();
  const operacao = document.getElementById("operacao").value;
  let resultado = "";
  if (operacao === "criptografar") {
    resultado = criptografar(textoOriginal);
  } else if (operacao === "descriptografar") {
    resultado = descriptografar(textoOriginal);
  }
  document.getElementById("texto-criptografado").value = resultado;
});