import React, { Component } from 'react' 
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0', //Valor inicial do Display
    clearDisplay: false, //Verifica se o Display precisa ser Limpo
    operation: null, //Valor da Operação + - / *
    values: [0, 0], //Array de armazenamento de valores n1 e n2  
    index: 0
};

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props){
        super(props)

        this.clearMemoty = this.clearMemoty.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.setOperation.bind(this)
    }

    clearMemoty(){
        this.setState({...initialState})
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){ //Não ter dois pontos na calculadora
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })
    }

    render(){
        return(
            <div className="Calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={this.clearMemoty} triple></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
            </div>
        )
    }
}