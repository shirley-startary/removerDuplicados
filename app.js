//Definir la funcion que nos quitara
var removerDuplicados = function (molde) {
  var arregloNuevo = [];
  for (var i = 0;i < molde.length;i += 1) {
    if (arregloNuevo.indexOf(molde[i]) === -1) {
        console.log("no esta el numero "+ molde[i]);
        console.log(molde[i]);
        arregloNuevo.push(molde[i])
    }
  }
  return arregloNuevo;
}

var enviarArreglo = [4,7,9,4,0,7];
console.log(removerDuplicados(enviarArreglo));
var enviarArreglo = [1,5,8,6,1,9];
console.log(removerDuplicados(enviarArreglo));
