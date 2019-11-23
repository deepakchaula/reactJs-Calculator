import React, { Component } from 'react';
import { InputDisplay } from '../components/InputDisplay';
import { Operation } from '../components/Operation';
import { NumButton } from '../components/NumButton';

export default class MainCalc extends Component {
    constructor(props){
        super(props);
        this.inputKey = 0;
        this.inputValue = 0;
        this.inputOne = 0;
        this.result = 0;
        this.op = '';
        this.inputTwo = 0;
        this.state = {inputKey: this.inputKey, inputValue: this.inputValue, inputOne: this.inputOne, result: this.result, inputTwo: this.inputTwo};
    }
    getInput(event){
        this.inputValue = event.target.value;
    }
    getValue(event){
        this.inputKey = event.target.value;
        this.inputValue = this.inputKey;
        this.inputTwo = document.querySelector('input').value += this.inputKey;
        if(this.inputKey === 'clear') {
            this.clear();
        }
        if(this.inputKey === '%') {
            this.div();
        }
        this.setState({...this.state, inputKey:this.inputKey, inputValue: this.inputValue, inputTwo: this.inputTwo});
        // console.log('display', this.inputTwo);
    }
    toggle(){
        this.inputValue = document.querySelector('input').value;
        this.inputOne = this.inputValue;
        this.inputValue = '';
        document.querySelector('input').value = this.inputValue;
        this.setState({...this.state, inputValue: this.inputValue, inputOne: this.inputOne});
    }
    total(op){
        this.result = op;
        document.querySelector('input').value = this.result;
        this.setState({...this.state, result: this.result});
        // console.log(this.state);
    }
    clear(){
        document.querySelector('input').value = '';
        this.result = '';
        this.setState({...this.state, result: this.result});
    }
    div(){
        this.result = parseInt(this.state.inputValue) / 100;
        document.querySelector('input').value = this.result;
        this.setState({...this.state, result: this.result});
    }
    applyOperation(op){
        var inputOpr = op;
        switch (inputOpr) {
            case ('+'):
                this.result = parseFloat(this.inputOne) + parseFloat(this.inputTwo);
                this.total(this.result);
                break;
            case '-':
                this.result = parseFloat(this.inputOne) - parseFloat(this.inputTwo);
                this.total(this.result);
                break;
            case '*':
                this.result = parseFloat(this.inputOne) * parseFloat(this.inputTwo);
                this.total(this.result);
                break;
            case '/':
                this.result = parseFloat(this.inputOne) / parseFloat(this.inputTwo);
                this.total(this.result);
                break;
            default:
                console.log('default');
        }
    }
    getOperation(event){
        var inputOpr = event.target.value;
        switch(true){
            case (inputOpr === '+' || inputOpr === '-' || inputOpr === '*' || inputOpr === '/'):
                this.op = inputOpr;
                this.toggle();
                break;
            default:
                if(!this.op){
                    this.result = parseInt(this.inputValue) / 1;
                    document.querySelector('input').value = this.result;
                    this.setState({...this.state, result: this.result});
                } else{
                    this.applyOperation(this.op);
                }
        }
    }
    render() {
        return (
            <div className="container">
                <InputDisplay oGetInput={this.getInput.bind(this)} />   
                <div className="conFlex">
                    <NumButton oGetValue={this.getValue.bind(this)} />
                    <Operation oGetOperation={this.getOperation.bind(this)} />
                </div>
            </div>
        )
    }
}
