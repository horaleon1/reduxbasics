import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes,quitarSuplente }) => {
  return (
    <div>
      <h2>Suplentes</h2>
      <div className="cancha">
        {suplentes.map(s => (
          <article key={s.id}>
            <div>
              <img src={s.foto} alt={s.nombre} />
              <button onClick={() => quitarSuplente(s)}>X</button>
            </div>
            <p>{s.nombre}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  suplentes: state.suplentes
});

const mapDispatchToProps = distpatch => ({
  quitarSuplente(jugador){
    distpatch({
      type:"QUITAR_SUPLENTE",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
