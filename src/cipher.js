function mod(n, m) {
  return ((n % m) + m) % m;
}

window.cipher = {
  encode: (mensaje, offset) => {
    let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje.charAt(i);

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
  decode: (mensaje, offset) => {
    let mensajeDesencriptado = '';

    for(let i = 0; i < mensaje.length; i++){
      let caracter = mensaje.charAt(i);

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
