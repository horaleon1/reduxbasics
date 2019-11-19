import React from "react";
import { connect } from 'react-redux';

const Titulares = ({ titulares,quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {titulares.map(t => (
        <article className="titular" key={t.id}>
          <div>
            <img src={t.foto} alt={t.nombre} />
            <button onClick={() => quitarTitular(t)}>X</button>
          </div>
          <p>{t.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  titulares: state.titulares
});

const mapDispatchToProps = distpatch => ({
  quitarTitular(jugador){
    distpatch({
      type:"QUITAR_JUGADOR",
      jugador
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)