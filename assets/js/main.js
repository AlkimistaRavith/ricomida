document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  });

  $(document).ready(function() {
    $('#enviarCorreo').on('click', function() {
      let correo = prompt('Ingrese su correo:')
      if (correo !== null) {
        alert('El correo fue enviado correctamente...')
      }
    })
  })

  $(document).ready(function() {
    $('#agregarFav').on('click', function() {
      $(this).prop('disabled', true)
      $(this).text('añadido')
    })
  })

  $(document).ready(function() {
    $('.titulo-receta').on('dblclick', function() {
      $(this).css('color', 'red')
    })
  })

  $(document).ready(function() {
    $('.card-title').on('click', function() {
      $(this).siblings('.card-text').toggle()
    })
  })

  $(document).ready(function() {
    $('#suscribir').on('click', function() {
      let correo2 = prompt('Ingrese su correo:')
      if (correo2 !== null) {
        alert('Se ha enviado una solicitud a su correo.')
      }
    })
  })

  $(document).ready(function() {
    $('#contactar').on('click', function() {
        let Nombre = prompt('Ingrese su nombre:')
        let correo = prompt('Ingrese su correo:')
        let mensaje = prompt('Ingrese un mensaje:')
        alert('Gracias por contactarnos!')
    })
  })