// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


import { getFirestore, collection, doc, getDoc ,  setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// ...
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdWvMlu-r9eMNRgZLcQzx8sbx_VbkfuKg",
  authDomain: "siberia-now.firebaseapp.com",
  projectId: "siberia-now",
  storageBucket: "siberia-now.appspot.com",
  messagingSenderId: "1010746424515",
  appId: "1:1010746424515:web:6adf4fc10bcef56501b676",
  measurementId: "G-PYZTDMM5LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const firestore = getFirestore(app); // Obtén la instancia de Firestore

// Obtener el correo electrónico desde el almacenamiento local
const userEmail = localStorage.getItem('userEmail');

// Función para guardar los arrays en Firestore
function guardarArraysEnFirestore() {
  if (userEmail) {
    // Referencia a la colección en Firestore donde se guardarán los arrays
    const userFolder = userEmail;
    const colección = collection(firestore, "users", userFolder, "arrays mes");

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
    };

    var tit = document.getElementById("titulos");
    alert(tit.innerHTML);

    // Comprobar si los arrays ya existen en Firestore
    getDoc(doc(colección, tit.innerHTML))
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Los arrays existen, mostrar mensaje emergente para sobrescribir o cancelar
        mostrarConfirmacionSobrescritura(() => {
          // Guardar los arrays en Firestore
          setDoc(doc(colección, tit.innerHTML), arrays)
            .then(() => {
              mostrarExito();
            })
            .catch((error) => {
              mostrarError();
              console.error('Error al guardar los datos: ', error);
            });
        });
      } else {
        // Los arrays no existen, guardar directamente
        setDoc(doc(colección, tit.innerHTML), arrays)
          .then(() => {
            mostrarExito();
          })
          .catch((error) => {
            mostrarError();
            console.error('Error al guardar los datos: ', error);
          });
      }
    })
    .catch((error) => {
      mostrarError();
      console.error('Error al comprobar los datos en Firestore: ', error);
    });

  } else {
    // El correo electrónico no está disponible
    console.error('Correo electrónico no encontrado en el almacenamiento local.');
  }
}

 //Función para cargar los valores desde Firestore
 function cargarValoresDesdeFirestore() {
  // Obtiene los arrays guardados en Firestore

  var tit=0;

  tit=document.getElementById("titulos"); 

  const userFolder = userEmail;
const colección = collection(firestore, "users", userFolder, "arrays mes");

  getDoc(doc(colección, tit.innerHTML))
  .then(function (documento) {
    if (documento.exists) {
      var valores = documento.data();

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

        if (valores.totalhorasemana) {
          totalhorasemana = valores.totalhorasemana;
        }

        if (valores.totaleurosemana) {
          totaleurosemana = valores.totaleurosemana;
        }


        console.log("Arrays cargados desde Firestore.");

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

        console.log ("totalhorassemana",totalhorasemana);
			  console.log ("totaleurossemana",totaleurosemana);

      } else {
        console.log("El documento no existe en Firestore.");
      }
    })
    .catch(function (error) {
      console.error("Error al cargar los valores desde Firestore: ", error);
    });
}

function guardarTablaEnFirestore() {
  if (userEmail) {
    // Referencia a la colección en Firestore donde se guardarán los datos
    const userFolder = userEmail;
    const colección = collection(firestore, "users", userFolder, "tablas");

    var tabla = document.getElementById("diasc");
    var tablaData = [];

    // Recorre las filas de la tabla y guarda los datos en un arreglo plano
    for (var i = 1; i < tabla.rows.length; i++) {
      var fila = tabla.rows[i];
      for (var j = 0; j < fila.cells.length; j++) {
        // Almacenar el contenido HTML de la celda si existe
        if (fila.cells[j].innerHTML) {
          tablaData.push(fila.cells[j].innerHTML);
        } else {
          tablaData.push(fila.cells[j].textContent);
        }
      }
    }

    var tit = document.getElementById("titulos").innerHTML;
    var tablaDocumentData = {
      titulo: tit,
      datos: tablaData,
    };

    // Comprobar si la tabla ya existe en Firestore
    getDoc(doc(colección, tit))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // La tabla existe, mostrar mensaje emergente para sobrescribir o cancelar
          mostrarConfirmacionSobrescritura(() => {
            // Guardar la tabla en Firestore
            setDoc(doc(colección, tit), tablaDocumentData)
              .then(() => {
                mostrarExito();
              })
              .catch((error) => {
                mostrarError();
                console.error("Error al guardar los datos: ", error);
              });
          });
        } else {
          // La tabla no existe, guardar directamente
          setDoc(doc(colección, tit), tablaDocumentData)
            .then(() => {
              mostrarExito();
            })
            .catch((error) => {
              mostrarError();
              console.error("Error al guardar los datos: ", error);
            });
        }
      })
      .catch((error) => {
        mostrarError();
        console.error("Error al comprobar los datos en Firestore: ", error);
      });
  } else {
    // El correo electrónico no está disponible
    console.error("Correo electrónico no encontrado en el almacenamiento local.");
  }
}


function cargarTablaDesdeFirestore() {
  if (userEmail) {
    // Referencia a la colección en Firestore donde se encuentran los datos de la tabla
    const userFolder = userEmail;
    const colección = collection(firestore, "users", userFolder, "tablas");

    var tit = document.getElementById("titulos").innerHTML;

    // Obtener el documento de la tabla desde Firestore
    getDoc(doc(colección, tit))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          var tablaDocumentData = docSnapshot.data();
          var tablaData = tablaDocumentData.datos;

          // Acceder al elemento de la tabla en el HTML
          var tabla = document.getElementById("diasc");

          // Llenar la tabla con los datos cargados desde Firestore
          for (var i = 0; i < tablaData.length; i++) {
            var fila = tabla.rows[Math.floor(i / 7) + 1]; // Filas de la tabla, 1-indexed
            var celda = fila.cells[i % 7]; // Celdas de cada fila, 0-indexed
            
            // Insertar el contenido HTML si es un string válido
            if (typeof tablaData[i] === 'string') {
              celda.innerHTML = tablaData[i];
            } else {
              celda.textContent = tablaData[i];
            }
          }

          console.log("Tabla cargada desde Firestore.");
        } else {
          console.log("El documento no existe en Firestore.");
        }
      })
      .catch((error) => {
        console.error("Error al cargar la tabla desde Firestore: ", error);
      });
  } else {
    // El correo electrónico no está disponible
    console.error("Correo electrónico no encontrado en el almacenamiento local.");
  }
}

const miBoton = document.getElementById('guardararray');
miBoton.addEventListener('click', function() {
  guardarArraysEnFirestore();

});

const miBoton2 = document.getElementById('anterior');
miBoton2.addEventListener('click', function() {
  cargarValoresDesdeFirestore();

});

const miBoton22 = document.getElementById('posterior');
miBoton22.addEventListener('click', function() {
  cargarValoresDesdeFirestore();

});

const miBoton3 = document.getElementById('guardartablaenfirestore');
miBoton3.addEventListener('click', function() {
  guardarTablaEnFirestore();

});
   
const miBotonCargar = document.getElementById('anterior');
miBotonCargar.addEventListener('click', function() {
  cargarTablaDesdeFirestore();
});

const miBotonCargar2 = document.getElementById('posterior');
miBotonCargar2.addEventListener('click', function() {
  cargarTablaDesdeFirestore();
});

// Función para comprobar si los arrays existen en Firestore y mostrar el mensaje emergente

// Función para comprobar si los arrays existen en Firestore y mostrar el mensaje emergente



