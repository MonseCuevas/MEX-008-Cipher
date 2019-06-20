function mod(n, m) {
  return ((n % m) + m) % m;
}

window.cipher = {
  encode: (offset, string) => {
    let mensajeCifrado = '';

    for (let i = 0; i < string.length; i++) {
      let caracter = string.charAt(i);

      if(caracter === ' '){
        mensajeCifrado = mensajeCifrado + caracter;
      } else {
        let numeroASCII = caracter.charCodeAt(0);
        let numeroOffset = ((numeroASCII - 65 + parseInt(offset)) % 26) + 65;
        mensajeCifrado = mensajeCifrado + String.fromCharCode(numeroOffset);
      }
    }

    return mensajeCifrado;
  },
  decode: (offset,string) => {
    let mensajeDesencriptado = '';

    for(let i = 0; i < string.length; i++){
      let caracter = string.charAt(i);

      if(caracter === ' '){
        mensajeDesencriptado = mensajeDesencriptado + caracter;
      } else {
        let numeroASCII = caracter.charCodeAt(0);
        let numeroOffset = mod((numeroASCII - 65 - parseInt(offset)), 26) + 65;
        mensajeDesencriptado = mensajeDesencriptado + String.fromCharCode(numeroOffset);
      }
    }

    return mensajeDesencriptado;
  }
};
