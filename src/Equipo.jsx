import React, { Component } from 'react';
import Titulares from './Titulares';
import Suplentes from './Suplentes';

export default class Equipo extends Component {
  render() {
    return (
      <section>
        <Titulares />
        <Suplentes />
      </section>
    )
  }
}
