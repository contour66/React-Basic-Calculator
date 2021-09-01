import React from "react";
// import { useState } from "react";
// import Answer from "./Answer";

function Button (props){
   
   

   const handleClick = (event) => {
        console.log(event.target.value);
    }

    //We retreive the property value below.
  
        return( <button
            onClick={handleClick} value={props.value} input={props.value}>{props.value}</button>
          
           
        );
}
export default Button;