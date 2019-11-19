import React from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="container">
      {jugadores.map(j => (
        <article key={j.id}>
          <img src={j.foto} alt={j.nombre} />
          <h3>{j.nombre}</h3>
          <div>
            <button onClick={() => agregarTitular(j)}>Titular</button>
            <button onClick={() => agregarSuplente(j)}>Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  jugadores: state.jugadores
});

const mapDispatchToProps = distpatch => ({
  agregarTitular(jugador) {
    distpatch({
      type: "AGREGAR_TITULAR",
      jugador
    });
  },
  agregarSuplente(jugador) {
    distpatch({
      type: "AGREGAR_SUPLENTE",
      jugador
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
