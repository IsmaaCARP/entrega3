const guardarContacto = (local, contacto) => {
  local.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};

const cargarContactos = (local, parentNode) => {
  let claves = Object.keys(local);
  for (claves of claves) {
    let contacto = JSON.parse(local.getItem(claves));
    crearContacto(parentNode, contacto, local);
  }
};

const crearContacto = (parentNode, contacto, local) => {
  let divContacto = document.createElement("div");
  let nombreContacto = document.createElement("h3");
  let numeroContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");
  let iconoBorrar = document.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = " delete_forever";

  divContacto.classList.add("Tarea");
  iconoBorrar.classList.add("material-icons", "icono");

  iconoBorrar.onclick = () => {
    local.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto);
};
