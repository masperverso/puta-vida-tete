// Agrega un mensaje emergente personalizado para confirmar la sobrescritura de datos
function mostrarConfirmacionSobrescritura(callback) {
  Swal.fire({
    title: '¿Desea sobrescribir los datos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sobrescribir',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'btn btn-primary mx-2',
      cancelButton: 'btn btn-secondary mx-2',
    },
    buttonsStyling: false,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
}

// Agrega un mensaje emergente para indicar que los datos se guardaron correctamente
function mostrarExito() {
  Swal.fire({
    title: 'Datos guardados correctamente',
    icon: 'success',
    customClass: {
      confirmButton: 'btn btn-primary mx-2',
    },
    buttonsStyling: false,
    allowOutsideClick: false,
  });
}

// Agrega un mensaje emergente para indicar que ocurrió un error al guardar los datos
function mostrarError() {
  Swal.fire({
    title: 'Error al guardar los datos',
    text: 'Ha ocurrido un error al guardar los datos en Firestore.',
    icon: 'error',
    customClass: {
      confirmButton: 'btn btn-primary mx-2',
    },
    buttonsStyling: false,
    allowOutsideClick: false,
  });
}
