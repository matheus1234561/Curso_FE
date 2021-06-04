import React from 'react';

import Secao from './Secao';

export default class App
  extends React.Component {
  render() {
    return (<div>
      <Secao
        titulo="Secao 1"
        descricao="Testando descrição 1."
      />

      <Secao
        titulo="Secao 2"
        descricao="Testando descrição 2."
      />
    </div>)
  }
}