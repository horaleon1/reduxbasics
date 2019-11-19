import React, { Component } from "react";
import { Provider } from "react-redux";
import store from './store';
import Equipo from "./Equipo";
import Jugadores from "./Jugadores";
import "./App.css";

const Title = props => {
  return <h1>{props.title}</h1>;
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Title title="Administrador de Jugadores" />
          <Jugadores />
          <Equipo />
        </div>
      </Provider>
    );
  }
}
