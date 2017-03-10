import React, { Component } from 'react';

import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> Hola, Bienvenido al sistema</h1>

        <ul>
            <li> <Link to="/clients" > Ir a Clientes</Link></li>
            <li> <Link to="/products" > Ir a Productos</Link></li>
        </ul>

      </div>
    );
  }
}