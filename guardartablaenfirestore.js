document.getElementById("guardarTablaenfirestore").addEventListener("click", function() {
    var tabla = document.getElementById("diasc");
    var filas = tabla.getElementsByTagName("tr");
    var contenidoHTML = "<table>\n";
    
    for (var i = 0; i < filas.length; i++) {
      var celdas = filas[i].querySelectorAll("th, td");
      contenidoHTML += "<tr>\n";
    
      for (var j = 0; j < celdas.length; j++) {
        var color = window.getComputedStyle(celdas[j]).color;
        var contenidoCelda = celdas[j].innerHTML.replace(/\n/g, "<br>");
        
        if (celdas[j].tagName === "TH") {
          contenidoHTML += `<th style="color: ${color}">${contenidoCelda}</th>\n`;
        } else {
          contenidoHTML += `<td style="color: ${color}">${contenidoCelda}</td>\n`;
        }
      }
    
      contenidoHTML += "</tr>\n";
    }
    
    contenidoHTML += "</table>";
    
    // Guardar contenidoHTML en Firestore
    firebase.firestore().collection("tablas horas").doc(tit.innerHTML).set({
      contenido: contenidoHTML
    })
    .then(function() {
      console.log("Tabla guardada en Firestore");
    })
    .catch(function(error) {
      console.error("Error al guardar la tabla en Firestore:", error);
    });
  });

  function cargarTablaDesdeFirestore() {
    // Obtener el documento de la tabla desde Firestore
    firebase.firestore().collection("tablas horas").doc(tit.innerHTML).get()
      .then(function(doc) {
        if (doc.exists) {
          var contenidoHTML = doc.data().contenido;
          var divTemp = document.createElement("div");
          divTemp.innerHTML = contenidoHTML;
  
          var tablaNueva = divTemp.querySelector("table");
          if (tablaNueva) {
            var tablaActual = document.getElementById("diasc");
            tablaActual.innerHTML = tablaNueva.innerHTML;
  
            console.log("Tabla cargada desde Firestore");
          } else {
            console.log("No se encontró una tabla en el contenido HTML de Firestore");
          }
        } else {
          console.log("No se encontró la tabla en Firestore");
        }
      })
      .catch(function(error) {
        console.error("Error al cargar la tabla desde Firestore:", error);
      });
  }
  
  