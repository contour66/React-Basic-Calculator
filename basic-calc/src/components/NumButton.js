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
        
            
            
        render() 
        {       let number = '';
                let answer = 0;
                let display = 0;

                const getValue = (val) =>  {
                       

                        
                        
                       if (val === "add"){
                               answer += parseInt(number);
                               resetValue();
                        }
                        else if (val === "subtract"){
                                answer -= parseInt(number);
                                resetValue();
                         }
                         if(
                                val !== "add" && 
                                val !== "subtract" &&
                                val !== "multiply" &&
                                val !== "divide" ){
                                number+= val;
                                console.log("Current number: " + number);
                        }
                        //  else if (val === "multiply"){
                        //         answer *= parseInt(number);
                        //         resetValue();
                        //  }
                        //  else if (val === "divide"){
                        //         answer /= parseInt(number);
                        //         resetValue();
                        //  }
                        //  else
                        //        {
                        //         number+= val;
                        //         console.log("Current number: " + number);
                        // }
              
                }
                const resetValue = () =>{
                        display = answer;
                        console.log("Answer: " + answer);
                        number = '';
                }
                
                return      <div>
                                <div>
                                        <Button className="btn-styles" onClick={() => getValue(1)}>{one}</Button>
                                        <Button className="btn-styles" onClick={() => getValue(2)}>{two}</Button>
                                        <Button className="btn-styles" onClick={() => getValue(3)}>{three}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles"onClick={() => getValue(4)}>{four}</Button>
                                        <Button className="btn-styles"onClick={() => getValue(5)}>{five}</Button>
                                        <Button className="btn-styles"onClick={() => getValue(6)}>{six}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles"onClick={() => getValue(7)}>{seven}</Button>
                                        <Button className="btn-styles"onClick={() => getValue(8)}>{eight}</Button>
                                        <Button className="btn-styles"onClick={() => getValue(9)}>{nine}</Button>
                                </div>
                                <div>
                                        <Button className="btn-styles"onClick={() => getValue(0)}>{zero}</Button>

                                </div>
                                <div>
                                        <Button className="btn-styles" onClick={() => getValue("add")}>{plus}</Button>
                                        <Button className="btn-styles" onClick={() => getValue("subtract")}>{minus}</Button>
                                        <Button className="btn-styles" onClick={() => getValue("divide")}>{divide}</Button>
                                        <Button className="btn-styles" onClick={() => getValue("multiply")}>{multiply}</Button>
                                        {/* <Button className="btn-styles">{equals}</Button> */}
                                </div>
                                <div>
                                        <Answer></Answer>
                                </div>
                        </div>
                }
        
}
export default NumButton;