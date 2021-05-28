import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
// import Answer from './components/Answer';

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const zero = 0;
const plus = "+";
const minus = "-";
const divide = "/";
const multiply = "x";
const equals = "=";



class NumButton extends React.Component {
        // calculate = () =>
        
        handleInput = (value) =>
                console.log(value);
        render() {
                return (
                        <div>
                                <div>
                                        <Button onClick={this.handleInput} key={1} value={1}>{one}</Button>
                                        <Button>{two}</Button>
                                        <Button>{three}</Button>
                                </div>
                                <div>
                                        <Button>{four}</Button>
                                        <Button>{five}</Button>
                                        <Button>{six}</Button>
                                </div>
                                <div>
                                        <Button>{seven}</Button>
                                        <Button>{eight}</Button>
                                        <Button>{nine}</Button>
                                </div>
                                <div>
                                        <Button>{zero}</Button>

                                </div>
                                <div>
                                        <Button>{plus}</Button>
                                        <Button>{minus}</Button>
                                        <Button>{divide}</Button>
                                        <Button>{multiply}</Button>
                                        <Button>{equals}</Button>
                                </div>
                                <div>
                                        {/* <Answer></Answer> */}
                                </div>
                        </div>
                )
        }
}
export default NumButton;