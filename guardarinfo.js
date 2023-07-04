// Función para guardar los arrays en un archivo
function guardarArraysEnArchivo() {
    var arrays = {
      //array1: [1, 2, 3],
      //array2: ["a", "b", "c"],
      // Agrega aquí todos los arrays que deseas guardar
    horasnochemes: horasnochemes,
	  horasdiarias: horasdiarias,
	  eurosdiarios: eurosdiarios,
	  unidadesdiarias: unidadesdiarias,
	  festivasmes: festivasmes,
	  transportemes: transportemes,

	  dietasemana: dietasemana,
	  madruguesemana: madruguesemana,
	  supermadruguesemana: supermadruguesemana,
	  turnopartidosemana: turnopartidosemana,

	  dietames: dietames,
	  madruguemes: madruguemes,
	  supermadruguemes: supermadruguemes,
	  turnopartidomes: turnopartidomes,
    };
  
    var contenido = JSON.stringify(arrays);
    var blob = new Blob([contenido], { type: "application/json;charset=utf-8" });
    saveAs(blob, "./" + tit.innerHTML + ".json");
  }

function cargarValoresDesdeArchivo() {

        var input = document.createElement("input");
        input.type = "file";
          
        input.addEventListener("change", function(event) {

            var archivo = event.target.files[0];
            var lector = new FileReader();
          
              lector.onload = function(e) {
                var contenido = e.target.result;
                var valores = JSON.parse(contenido);
  
         // Sobrescribe los arrays existentes con los valores cargados
      if (valores.horasnochemes) {
        horasnochemes = valores.horasnochemes;
      }
      if (valores.horasdiarias) {
        horasdiarias = valores.horasdiarias;
      }

      if (valores.eurosdiarios) {
        eurosdiarios = valores.eurosdiarios;
      }

      if (valores.unidadesdiarias) {
        unidadesdiarias = valores.unidadesdiarias;
      }

      if (valores.festivasmes) {
        festivasmes = valores.festivasmes;
      }

      if (valores.transportemes) {
        transportemes = valores.transportemes;
      }

      if (valores.dietasemana) {
        dietasemana = valores.dietasemana;
      }

      if (valores.madruguesemana) {
        madruguesemana = valores.madruguesemana;
      }

      if (valores.supermadruguesemana) {
        supermadruguesemana = valores.supermadruguesemana;
      }

      if (valores.turnopartidosemana) {
        turnopartidosemana = valores.turnopartidosemana;
      }

      if (valores.dietames) {
        dietames = valores.dietames;
      }

      if (valores.madruguemes) {
        madruguemes = valores.madruguemes;
      }

      if (valores.supermadruguemes) {
        supermadruguemes = valores.supermadruguemes;
      }

      if (valores.turnopartidomes) {
        turnopartidomes = valores.turnopartidomes;
      }

   
      };
  
      lector.readAsText(archivo);
    });
  
    input.click();

    console.log ("horasnochemes",horasnochemes);
	console.log("horasdiarias",horasdiarias);
	console.log("eurosdiarios",eurosdiarios);
	console.log("unidadesdiarias",unidadesdiarias);
	console.log ("festivasmes",festivasmes);
	console.log ("transportemes",transportemes);

	console.log ("dietasemana",dietasemana);
	console.log ("madruguesemana",madruguesemana);
	console.log ("supermadruguesemana",supermadruguesemana);
	console.log ("turnopartidosemana",turnopartidosemana);

	console.log ("dietasmes",dietames);
	console.log ("madruguesmes",madruguemes);
	console.log ("supermadruguesmes",supermadruguemes);
	console.log ("turnopartidosmes",turnopartidomes);
    
  }
  
  // Ejemplo de uso
  // Guardar los arrays en un archivo
  

  