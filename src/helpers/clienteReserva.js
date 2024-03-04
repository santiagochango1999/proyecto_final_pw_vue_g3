import axios from "axios";

//Empleado
//Funcion1
const registrarCliente = async (body) => {
  const data = axios
    .post(`http://localhost:8090/API/v1.0/budget/clientes`, body)
    .then((r) => r.data);
  console.log(data);
};
export const registrarClienteFachada = async (body) => {
  return await registrarCliente(body);
};
//Funcion 2.1
const buscarCliente = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/clientes/${id}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
export const buscarClienteFachada = async (id) => {
  return await buscarCliente(id);
};

//Funcion 2.2
const actualizarCliente = async (id, body) => {
  const data = axios
    .patch(`http://localhost:8090/API/v1.0/budget/clientes/${id}`, body)
    .then((r) => r.data);
  console.log(data);
};
export const actualizarClienteFachada = async (id, body) => {
  return await actualizarCliente(id, body);
};

//Funcion 2.3
const eliminarCliente = async (id) => {
  const data = axios
    .delete(`http://localhost:8090/API/v1.0/budget/clientes/${id}`)
    .then((r) => r.data);
  console.log(data);
};
export const eliminarClienteFachada = async (id) => {
  return await eliminarCliente(id);
};

//Funcion 3
const insertarVehiculo = async (body) => {
  const data = axios
    .post(`http://localhost:8090/API/v1.0/budget/vehiculos`, body)
    .then((r) => r.data);
  console.log(data);
};
export const insertarVehiculoFachada = async (body) => {
  return await insertarVehiculo(body);
};

//Funcion 4.1
const buscarVehiculoIdMarca = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
export const buscarVehiculoFachada = async (id) => {
  return await buscarVehiculoIdMarca(id);
};

//Funcion 4.2
const actualizarVehiculo = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
export const actualizarVehiculoFachada = async (id) => {
  return await actualizarVehiculo(id);
};
//Funcion 4.3
const eliminarVehiculo = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
export const eliminarVehiculoloFachada = async (id) => {
  return await eliminarVehiculo(id);
};

//NUMERO RESERVA
const buscarVehiculoRes = async (number) => {
  const data = axios
    .get(
      ` http://localhost:8090/API/v1.0/budget/vehiculos/buscarVehiculoReservado/${number}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const buscarVehiculoReservadoFachada = async (number) => {
  return await buscarVehiculoRes(number);
};

//SIN RESERVA
const retirarVehiculoSinReserva = async (number) => {
  const data = axios
    .get(
      `http://localhost:8090/API/v1.0/budget/vehiculos/buscarVehiculoSinReserva/${number}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const retirarVehiculoSinReservaFachada = async (number) => {
  return await retirarVehiculoSinReserva(number);
};

//funcion 6. REPORTES
const reportesClienteVehiculo = async (fechaInicio, fechaFin) => {
  const data = axios
    .get(
      `http://localhost:8090/API/v1.0/budget/reservas/fechasReservas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const reportesClienteVehiculoFachada = async (fechaInicio, fechaFin) => {
  return await reportesClienteVehiculo(fechaInicio, fechaFin);
};
