const formulario = document.getElementById('forms')


formulario.addEventListener('submit', function(e) {

    console.log("click")
    e.preventDefault();

    const nombre = document.getElementById('fullname').value;
    const tel = document.getElementById('tel').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('coments').value;

    if (nombre.trim() === '' || tel.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return
    } else {
        alert('Formulario enviado correctamente.');
    }
    console.log(nombre)
    console.log(tel)
    console.log(correo)
    console.log(mensaje)


    const contacto = {  
        name: nombre,name: mensaje, tel: tel,correo: mensaje
     }
});