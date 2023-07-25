
// Función para guardar los arrays en el localStorage
function guardarArraysEnLocalStorage() {
  var arrays = {
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
	  totalhorasemana: totalhorasemana,
      totaleurosemana: totaleurosemana,
    // Agrega aquí todos los arrays que deseas guardar
  };

  localStorage.setItem("arrays", JSON.stringify(arrays));
}

// Función para cargar los arrays desde el localStorage
function cargarArraysDesdeLocalStorage() {
  var arrays = JSON.parse(localStorage.getItem("arrays"));

  if (arrays) {

    horasnochemes = arrays.horasnochemes;
	  horasdiarias = arrays.horasdiarias;
	  eurosdiarios = arrays.eurosdiarios;
	  unidadesdiarias = arrays.unidadesdiarias;
	  festivasmes = arrays.festivasmes;
	  transportemes = arrays.transportemes;

	  dietasemana = arrays.dietasemana;
	  madruguesemana = arrays.madruguesemana;
	  supermadruguesemana = arrays.supermadruguesemana;
	  turnopartidosemana = arrays.turnopartidosemana;

	  dietames = arrays.dietames;
	  madruguemes = arrays.madruguemes;
	  supermadruguemes = arrays.supermadruguemes;
	  turnopartidomes = arrays.turnopartidomes;

	  totalhorasemana= arrays.totalhorasemana,
      totaleurosemana= arrays.totaleurosemana,
    // Agrega aquí la asignación para todos los arrays que deseas cargar
  }
}

// Ejemplo de uso
// Guardar los arrays en el localStorage
guardarArraysEnLocalStorage();

// Cargar los arrays desde el localStorage
cargarArraysDesdeLocalStorage();
