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

function guardarArraysEnFirestore() {

if (userEmail) {

// Referencia a la colección en Firestore donde se guardarán los arrays
const userFolder = userEmail;
const colección = collection(firestore, "users", userFolder, "arrays mes");
// Función para guardar los arrays en Firestore

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
  };

  var tit=0;

  tit=document.getElementById("titulos"); 

  alert (tit.innerHTML);

  // Guarda los arrays en Firestore
  setDoc(doc(colección, tit.innerHTML), arrays)
    .then(function () {
      console.log("Documento creado en Firestore.");
    })
    .catch(function (error) {
      console.error("Error al crear el documento en Firestore: ", error);
    });
}



//window.addEventListener('load', function() {
  // Aquí asegúrate de que el elemento con el id "titulos" ya tenga un valor

  else {
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

        console.log("Arrays cargados desde Firestore.");
      } else {
        console.log("El documento no existe en Firestore.");
      }
    })
    .catch(function (error) {
      console.error("Error al cargar los valores desde Firestore: ", error);
    });
}

const miBoton = document.getElementById('guardararray');
miBoton.addEventListener('click', function() {
  guardarArraysEnFirestore();

});

const miBoton2 = document.getElementById('cargararray');
miBoton2.addEventListener('click', function() {
  cargarValoresDesdeFirestore();

});
   //cargarValoresDesdeFirestore();


