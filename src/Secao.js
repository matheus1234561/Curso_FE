import React from 'react';

export default class Secao
    extends React.Component {

    render() {

        const { titulo, descricao }
            = this.props;

        return (
            <div>
                <h1>{titulo}</h1>

                <h3>{descricao}</h3>
            </div>
        );
    }
}