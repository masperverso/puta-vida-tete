
const db = firebase.firestore();

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

  // Obtén el ID del usuario autenticado actualmente
  const userId = firebase.auth().currentUser.uid;

  // Define la ruta de la colección específica para el usuario
  const userCollectionPath = `users/${userId}`; // Ruta de la colección

  // Define el nombre del documento
  const documentName = "arrays_mes";

  // Guarda los datos en Firestore dentro de la colección del usuario y el documento especificado
  db.collection(userCollectionPath)
    .doc(documentName)
    .set(arrays)
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
  
