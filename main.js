const nombre = document.querySelector(".nombre");
const numero = document.querySelector(".numero");
const direccion = document.querySelector(".direccion");
const btnAgregarTarea = document.querySelector(".btn-agregar-tareas");
const ListadoTareas = document.querySelector(".Listado-Tareas");
const local = window.localStorage;

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value,
  };
  guardarContacto(local, contacto);
};
cargarContactos(local, ListadoTareas);
