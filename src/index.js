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