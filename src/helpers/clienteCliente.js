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