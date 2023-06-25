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
    });

    const timepickerfinal2 = document.getElementById("timepickerfinal2");
    selectedTimefinal2 = flatpickr(timepickerfinal2, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minuteIncrement: 15,
        defaultDate: "00:00",
    });
}

function resetTimePickers() {
    selectedTimeinicio.setDate("00:00", true);
    selectedTimefinal.setDate("00:00", true);
    selectedTimeinicio2.setDate("00:00", true);
    selectedTimefinal2.setDate("00:00", true);
}

function partido() {
    if (check_turno_partido.checked) {
        // Checkbox marcado
        document.getElementById('timepickerinicio2').style.visibility = 'visible';
        document.getElementById('timepickerfinal2').style.visibility = 'visible';

        document.getElementById("fila3").style.visibility = "visible";
        document.getElementById("fila4").style.visibility = "visible";

        if (!selectedTimeinicio2 || !selectedTimefinal2) {
            initializeTimePickers();
        }
    } else {
        // Checkbox desmarcado
        document.getElementById('timepickerinicio2').style.visibility = 'hidden';
        document.getElementById('timepickerfinal2').style.visibility = 'hidden';

        resetTimePickers();

        document.getElementById("fila3").style.visibility = "collapse";
        document.getElementById("fila4").style.visibility = "collapse";
    }
}










  
  