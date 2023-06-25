let selectedTimeinicio;
let selectedTimefinal;
let selectedTimeinicio2;
let selectedTimefinal2;

function initializeTimePickers() {
    const timepickerinicio = document.getElementById("timepickerinicio");
    selectedTimeinicio = flatpickr(timepickerinicio, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minuteIncrement: 15,
    });

    const timepickerfinal = document.getElementById("timepickerfinal");
    selectedTimefinal = flatpickr(timepickerfinal, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minuteIncrement: 15,
    });

    const timepickerinicio2 = document.getElementById("timepickerinicio2");
    selectedTimeinicio2 = flatpickr(timepickerinicio2, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minuteIncrement: 15,
        defaultDate: "00:00",
        onChange: function(selectedDates, dateStr, instance) {
            // Lógica adicional si es necesario
        }
    });

    const timepickerfinal2 = document.getElementById("timepickerfinal2");
    selectedTimefinal2 = flatpickr(timepickerfinal2, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minuteIncrement: 15,
        defaultDate: "00:00",
        onChange: function(selectedDates, dateStr, instance) {
            // Lógica adicional si es necesario
        }
    });
}

function hideTimePickers() {
    document.getElementById('timepickerinicio2').style.display = 'none';
    document.getElementById('timepickerfinal2').style.display = 'none';
}

function resetTimePickers() {
    selectedTimeinicio2.setDate("00:00", true);
    selectedTimefinal2.setDate("00:00", true);
}

function partido() {
  if (check_turno_partido.checked) {
      // Checkbox marcado
      document.getElementById('timepickerinicio2').style.display = 'inline';
      document.getElementById('timepickerfinal2').style.display = 'inline';

      document.getElementById("fila3").style.visibility = "visible";
      document.getElementById("fila4").style.visibility = "visible";

      if (!selectedTimeinicio2 || !selectedTimefinal2) {
          selectedTimeinicio2 = flatpickr("#timepickerinicio2", {
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              time_24hr: true,
              minuteIncrement: 15,
              defaultDate: "00:00"
          });

          selectedTimefinal2 = flatpickr("#timepickerfinal2", {
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              time_24hr: true,
              minuteIncrement: 15,
              defaultDate: "00:00"
          });
      }
  } else {
      // Checkbox desmarcado
      document.getElementById('timepickerinicio2').style.display = 'none';
      document.getElementById('timepickerfinal2').style.display = 'none';

      selectedTimeinicio2.setDate("00:00", true);
      selectedTimefinal2.setDate("00:00", true);

      document.getElementById("fila3").style.visibility = "collapse";
      document.getElementById("fila4").style.visibility = "collapse";
  }
}


// Ocultar los timepickers al cargar la página
hideTimePickers();

// Inicializar los timepickers
initializeTimePickers();

// Llamar a la función partido en el evento change de la casilla de verificación
check_turno_partido.addEventListener("change", partido);









  
  