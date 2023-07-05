

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

  // Obtén el ID del usuario autenticado actualmente
  const userId = firebase.auth().currentUser.uid;

  // Define la ruta de la carpeta específica para el usuario
  const userFolderPath = `users/${userId}/arrays_mes`; // Agrega "/arrays_mes" al final para especificar un nombre de documento

  // Guarda los datos en Firestore dentro de la carpeta del usuario
  db.collection(userFolderPath)
    .set(arrays) // Elimina .doc("arrays_mes") ya que especificamos el nombre de documento en la ruta
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
  
