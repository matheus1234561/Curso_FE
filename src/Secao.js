import React from 'react';
import "./secao.css"
export default class Secao
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num1: 0, num2: 0, result: 0 }
    }
    handleInput1(e) {
        const value = e.target.value;
        this.setState({ num1: value })
    }
    handleInput2(e) {
        const value = e.target.value;
        this.setState({ num2: value })
    }
    sum() {
        this.setState({ result: Number.parseFloat(this.state.num1) + Number.parseFloat(this.state.num2) })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                gap: '15px'
            }}>
                <p>{process.env.REACT_APP_TESTE}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input onChange={e => this.handleInput1(e)} type="numeric" placeholder="Valor 1" />
                    <input onChange={e => this.handleInput2(e)} type="numeric" placeholder="Valor 2" />
                </div>
                <button className="button" onClick={() => this.sum()} />
                <p>{this.state.result}</p>
            </div>


        );
    }
}