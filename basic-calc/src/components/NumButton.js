import React from "react";
// import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import Answer from './Answer';
import 'bootstrap/dist/css/bootstrap.min.css';

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


// const handleInput = (value) => console.log(value);

class NumButton extends React.Component {
        // handleClick = () => {
        //         this.props.onClick(this.props.value);
        //       }
            
            
        render() {
                return      <div>
                                <div>
                                        <Button className="btn-styles" onClick={this.handleClick} value="one">{one}</Button>
                                        <Button className="btn-styles">{two}</Button>
                                        <Button className="btn-styles">{three}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles">{four}</Button>
                                        <Button className="btn-styles">{five}</Button>
                                        <Button className="btn-styles">{six}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles">{seven}</Button>
                                        <Button className="btn-styles">{eight}</Button>
                                        <Button className="btn-styles">{nine}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles">{zero}</Button>

                                </div>
                                <div>
                                        <Button className="btn-styles">{plus}</Button>
                                        <Button className="btn-styles">{minus}</Button>
                                        <Button className="btn-styles">{divide}</Button>
                                        <Button className="btn-styles">{multiply}</Button>
                                        <Button className="btn-styles">{equals}</Button>
                                </div>
                                <div>
                                        <Answer></Answer>
                                </div>
                        </div>
                }
        
}
export default NumButton;