document.getElementById("btnlado").addEventListener("click", ()=> {
    document.getElementById("idInicio").style.display = "none";
    document.getElementById("idEncriptado").style.display = "block";
  });
  
  document.getElementById("aEncriptar").addEventListener("click", () => {
    document.getElementById("idInicio").style.display = "none";
    document.getElementById("idEncriptado").style.display = "block";
    document.getElementById("aInicio").addEventListener("click",() => {
  console.log("hola")
    });
    
  