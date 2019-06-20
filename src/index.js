document.getElementById("btnlado").addEventListener("click", ()=> {
  document.getElementById("idInicio").style.display = "none";
  document.getElementById("idEncriptado").style.display = "block";
  document.getElementById("idDesencriptado").style.display = "none";
});
  
document.getElementById("aEncriptar").addEventListener("click", () => {
  document.getElementById("idInicio").style.display = "none";
  document.getElementById("idEncriptado").style.display = "block";
  document.getElementById("idDesencriptado").style.display = "none";
});

document.getElementById("aInicio").addEventListener("click", () => {
  document.getElementById("idEncriptado").style.display = "none";
  document.getElementById("idInicio").style.display = "block";
  document.getElementById("idDesencriptado").style.display = "none";
});

document.getElementById("aDesencriptar").addEventListener("click", () => {
  document.getElementById("idEncriptado").style.display = "none";
  document.getElementById("idDesencriptado").style.display = "block";
  document.getElementById("idInicio").style.display = "none";
});

document.getElementById("btnEncriptado").addEventListener("click", () => {
  let offset = document.getElementById("offsetEncriptado").value;
  let lada = document.getElementById("ladaEncriptado").value;
  let numero = document.getElementById("numeroEncriptado").value;
  let mensajeAEncriptar = document.getElementById("mensajeAEncriptar").value;
  let mensajeEncriptado = document.getElementById("mensajeEncriptado");

  let mensajeCifrado = window.cipher.encode(mensajeAEncriptar.trim(), offset);
  mensajeEncriptado.value = mensajeCifrado;

  window.open("https://wa.me/" + lada.trim() + numero.trim() + "?text=" + mensajeCifrado, "_blank");
});

document.getElementById("btnDesencriptar").addEventListener("click", () => {
  let offset = document.getElementById("offsetDesencriptado").value;
  let mensajeADesencriptar = document.getElementById("mensajeADesencriptar").value;
  let mensajeDesencriptado = document.getElementById("mensajeDesencriptado");

  let mensajeDecifrado = window.cipher.decode(mensajeADesencriptar, offset);
  mensajeDesencriptado.value = mensajeDecifrado;
});