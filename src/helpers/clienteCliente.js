import axios from "axios";

const consultarVehiculosDisponibles = async () => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
export const consultarVehiculosDisponiblesFachada = async () => {
  return await consultarVehiculosDisponibles();
};
//Funcion 2
const reservarVehiculo = async (body) => {
  const data = axios
    .post(`http://localhost:8090/API/v1.0/budget/vehiculos`, body)
    .then((r) => r.data);
  console.log(data);
};
export const reservarVehiculoFachada = async (body) => {
  return await reservarVehiculo(body);
};
//Funcion 3
const registrarse = async (body) => {
  const data = axios
    .post(
      `http://localhost:8090/API/v1.0/budget/clientes/reserva/guardarCliente`,
      body
    )
    .then((r) => r.data);
  console.log(data);
};
export const registrarseFachada = async (body) => {
  return await registrarse(body);
};
//Funcion 4
const actualizarDatos = async (id, body) => {
  const data = axios
    .patch(
      `http://localhost:8090/API/v1.0/budget/clientes/reserva/${id}/actualizarCliente`,
      body
    )
    .then((r) => r.data);
  console.log(data);
};
export const actualizarDatosFachada = async (id, body) => {
  return await actualizarDatos(id, body);
};

//Agregado
const buscarCedula = async (cedula) => {
  const data = axios
    .get(
      `http://localhost:8090/API/v1.0/budget/clientes/clienteCedula?cedula=${cedula}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const buscarCedulaFachada = async (cedula) => {
  return await buscarCedula(cedula);
};
const actualizarCliente = async (body, id) => {
  const data = axios
    .put(`http://localhost:8090/API/v1.0/budget/clientes/${id}`, body)
    .then((r) => r.data);
  console.log(data);
};
export const actualizarClienteFachada = async (body, id) => {
  return await actualizarCliente(body, id);
};

//ReservarVehiculoPorPlaca
const busvarVehiculoPorPlaca = async (placa) => {
  const data = axios
    .get(
      `http://localhost:8090/API/v1.0/budget/clientes/buscarVehiculoPlaca/${placa}`
    )
    .then((r) => r.data);
  console.log("buscando vehiculo placa ", placa);
  return data;
};

export const busvarVehiculoPorPlacaFachada = async (placa) => {
  return await busvarVehiculoPorPlaca(placa);
};

//reservar Vehiculo Completo
const reservarVehiculoCompleto = async (
  bodyReserva,
  numeroTargeta,
  fechaInicio,
  fechaFin
) => {
  const data = axios
    .post(
      `http://localhost:8090/API/v1.0/budget/clientes/clienteCalcular/${numeroTargeta}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
      bodyReserva
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const reservarVehiculoCompletoFachada = async (
  bodyReserva,
  numeroTargeta,
  fechaInicio,
  fechaFin
) => {
  return await reservarVehiculoCompleto(bodyReserva,numeroTargeta, fechaInicio, fechaFin);
};

// EMPLEADO

// Registrarse Empleado

const registrarseEmp = async (body) => {
  const data = axios.post(`http://localhost:8090/API/v1.0/budget/empleados/guardarCliente`, body)
    .then(r => r.data);
  console.log(data);
};

export const registrarseEmpFachada = async (body) => {
  return await registrarseEmp(body);
};

// Buscar Por Apellido
const buscarApellido = async (apellido) => {
  const data = axios.get(`http://localhost:8090/API/v1.0/budget/clientes/clienteApellido?apellido=${apellido}`).then((r) => r.data);
  console.log(data);
  return data
};

export const buscarApellidoFachada = async (apellido) => {
  return await buscarApellido(apellido);
};

// Eliminar
const eliminarCliente = async (id) => {
  const data = axios.delete(`http://localhost:8090/API/v1.0/budget/clientes/${id}`).then(r => r.data);
  console.log(data);
}

export const eliminarFachada = async (id) => {
  await eliminarCliente(id);
}

// Actualizar Cliente desde Empleado
const actualizarClienteEmp = async (body) => {
  axios
    .put(`http://localhost:8090/API/v1.0/budget/empleados/buscarCliente`, body)
    .then((r) => r.data);
};
export const actualizarClienteEmpFachada = async (body) => {
  await actualizarClienteEmp(body);
};

// Buscar Cliente id original
const buscarClientePorId = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/clientes/${id}`)
    .then((r) => r.data);
  return data;
};

export const buscarClientePorIdFachada = async (id) => {
  return await buscarClientePorId(id);
};