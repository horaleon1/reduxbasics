import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Horacio",
      foto: "https://randomuser.me/api/portraits/thumb/men/55.jpg"
    },
    {
      id: 2,
      nombre: "Andrea",
      foto: "https://randomuser.me/api/portraits/thumb/women/55.jpg"
    },
    {
      id: 3,
      nombre: "Rodrigo",
      foto: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
    }
  ],
  titulares: [],
  suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {

  console.log(action)

  if (action.type === "AGREGAR_TITULAR") {
    return {
      // lo que ya tiene el estado
      ...state,
      titulares: state.titulares.concat(action.jugador),
      // dejar solo los no seleccionados
      jugadores: state.jugadores.filter( j => j.id !== action.jugador.id)
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return{
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter( j => j.id !== action.jugador.id )
    }
  }
  if(action.type === "QUITAR_JUGADOR") {
    return{
      ...state,
      titulares: state.titulares.filter( j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    }
  }
  if(action.type === "QUITAR_SUPLENTE") {
    return{
      ...state,
      titulares: state.suplentes.filter( j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    }
  }
  return state;
};

export default createStore(reducerEntrenador);
