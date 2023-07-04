
const db = firebase.firestore();
const collection = db.collection("arrays mes");

function guardarArraysEnFirestore() {
    var arrays = {
      // Tus arrays aquí
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
  
    // Guarda los datos en Firestore
    collection.doc(tit.innerHTML).set(arrays)
      .then(function() {
        console.log("Datos guardados en Firestore");
      })
      .catch(function(error) {
        console.error("Error al guardar los datos en Firestore:", error);
      });
  }

  function cargarValoresDesdeFirestore() {
    // Obtiene los datos desde Firestore
    collection.doc(tit.innerHTML).get()
      .then(function(doc) {
        if (doc.exists) {
          var valores = doc.data();
  
          // Sobrescribe los arrays existentes con los valores cargados
          // ...
  
          console.log("Datos cargados desde Firestore:", valores);
        } else {
          console.log("El documento no existe en Firestore");
        }
      })
      .catch(function(error) {
        console.error("Error al cargar los datos desde Firestore:", error);
      });
  }
  