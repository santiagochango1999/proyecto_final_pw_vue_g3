import axios from "axios";

//marca
const consultarVehiculoPorMarca = async (marca) => {
  const params = {
    marca: marca,
  };
  axios
    .get(
      `http://localhost:8090/API/v1.0/budget/clientes/vehiculos/buscarVehiculo`,
      {
        params: params,
      }
    )
    .then((r) => r.data);
  console.log("buscando marca vehiculo -> ", marca);
};

export const consultarVehiculoPorMarcaFachada = async (marca) => {
  return await consultarVehiculoPorMarca(marca);
};

//marca y modelo
const buscarVehiculoDisponibleMarcayModelo = async (marca, modelo) => {
  const params = {
    marca: marca,
    modelo: modelo,
  };
  axios
    .get(
      `http://localhost:8090/API/v1.0/budget/clientes/vehiculos/disponibleVehiculo`,
      { params: params }
    )
    .then((r) => r.data);
  console.log("buscando vehiculo marca y modelo");
};

export const buscarVehiculoDisponibleMarcayModeloFachada = async (
  marca,
  modelo
) => {
  return await buscarVehiculoDisponibleMarcayModelo(marca, modelo);
};

//funcion 5
const eliminarDatos = async (id) => {
  axios
    .delete(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`)
    .then((r) => r.data);
  // console.log(typeof(id));
  console.log("eliminando vehiculo");
};

export const eliminarDatosFachada = async (id) => {
  await eliminarDatos(id);
};

//funcion 6
const actualizarDatosVehiculo = async (body, id) => {
  axios
    .put(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`, body)
    .then((r) => r.data);
  console.log("actualizando vehiculo");
};

export const actualizarDatosVehiculoFachada = async (body, id) => {
  return await actualizarDatosVehiculo(body, id);
};

//Cliente
//Funcion 1
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

//vehiculoTo id client
const buscarVehiculoId = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos/${id}`)
    .then((r) => r.data);
  return data;
};

export const buscarVehiculoIdFachada = async (id) => {
  return await buscarVehiculoId(id);
};

//ID ORIGINAL VEHICULO
const buscarVehiculoOriginId = async (id) => {
  const data = axios
    .get(`http://localhost:8090/API/v1.0/budget/vehiculos/vehiOriginal/${id}`)
    .then((r) => r.data);
  return data;
};

export const buscarVehiculoOriginIdFachada = async (id) => {
  return await buscarVehiculoOriginId(id);
};
