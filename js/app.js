var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Dame nombre del estudiante: ");
    var pTecnico = prompt("Dame porcentaje tecnico: ");
    var hse= prompt("Dame porcentaje de habilidades socio-emocionales: ");
    var estudiante = {
      nombre : nombre,
      pTecnico : pTecnico,
      hse : hse
    };
    estudiantes.push(estudiante);
  //  console.log(estudiantes);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {

    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    //for (var i = 0, limite = estudiantes.length; i < limite; i++) {
    //console.log(estudiantes);
      //var numEstudiante= estudiantes[0];
      //mostrar(numEstudiante);
      var arrayEstudiantes= obtenerListaEstudiantes();
      var arrayTemporal=[];
    //console.log(arrayEstudiantes);
      for ( var i = 0 ; i < arrayEstudiantes.length ; i++){
      //  console.log(i);
      var estudiante = arrayEstudiantes[i];
      var enpantalla =  mostrar(estudiante);
      arrayTemporal.push(enpantalla);
      //  return enpantalla;
        //mostrar(arrayEstudiantes[i]);
      //  console.log(arrayEstudiantes[i]);
        //var ensena = mostrar(estudiante);
      //return ensena;
      //        console.log(mostrar);
        //mostrar(alumno);
      //document.write("<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>");
      //document.write( "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTecnico + "</p>");
      //document.write( "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>")
    }
    return arrayTemporal;
  // return enpantalla;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
  //  var arrayEncontre=[];
    var arrayEstudiantes= obtenerListaEstudiantes();
    var nombreBuscar= nombre;
  //  console.log(nombre);
    for ( var i = 0 ; i< arrayEstudiantes.length  ; i++){

      var estudiante = arrayEstudiantes[i];
      //console.log(estudiante.nombre);
      if(nombreBuscar == estudiante.nombre){
        //document.write("lo encontre en "+i);
        document.write("<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>");
        document.write( "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTecnico + "</p>");
        document.write( "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>")
        console.log("lo encontre en "+i);
        arrayEncontre.push(arrayEstudiantes[i]);

      }else {
        console.log("NO ESTA TT.TT");
      }

    }
  //  console.log(arrayEncontre);
    //return arrayEncontre;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    	// TO DO: calcular el mayor número del arreglo de números

      var arrayEstudiantes = obtenerListaEstudiantes();
      var temporal;
      pTecnico
      for ( var i = 0 ; i < arrayEstudiantes.length ; i++){
        for ( var j = 0 ; j< arrayEstudiantes.length ; j++){
          var estudiante= arrayEstudiantes[j];
          var estudiante2= arrayEstudiantes[j+1];
          if(estudiante.pTecnico > estudiante2.pTecnico){
            temporal = estudiante.pTecnico;
            estudiante.pTecnico = estudiante2.pTecnico;
            estudiante2.pTecnico= temporal;
          }
        }
      }
      console.log(arrayEstudiantes);
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
