import React, {useState, useRef} from "react";
import Colors from "./Colors";


function Form({ inputValues, onInputChange }) {

    const handleInput = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    };

    const handleNumberInputCM = (e) => {
    const { name, value } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");

    const maxLength = 16; 
    const truncatedValue = onlyNumbers.slice(0, maxLength);
    onInputChange(name, truncatedValue);
    };

    const handleNumberInputMM = (e) => {
    const { name, value } = e.target;
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    
    if(onlyNumbers <= 12) {
        const maxLength = 2; 
        const truncatedValue = onlyNumbers.slice(0, maxLength);
        onInputChange(name, truncatedValue);
    }
    };
    const handleNumberInputYY = (e) => {
        const { name, value } = e.target;
        const onlyNumbers = value.replace(/[^0-9]/g, "");
        
        const maxLength = 2; 
        const truncatedValue = onlyNumbers.slice(0, maxLength);
        onInputChange(name, truncatedValue);
        
    };
    
    const handleNumberInputCVV = (e) => {
    const { name, value } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");

    const maxLength = 3; 
    const truncatedValue = onlyNumbers.slice(0, maxLength);
    onInputChange(name, truncatedValue);
    };
    
    
    return (
        <form className="CardCraft_form">
        <div className='column_form'>
            <label>CARDHOLDER NUMBER</label>
            <input
            type="number"
            onChange={handleNumberInputCM}
            name="input1"
            value={inputValues.input1}
            //onChange={handleInput}
            
            placeholder='e.g. 4321876512345678'>
            </input>

            <label>CARDHOLDER NAME</label>
            <input
            type="text"
            maxLength={20}
            name="input2"
            value={inputValues.input2}
            onChange={handleInput}
            placeholder='e.g. John Doe'>
            </input>
                      
        </div>

        
        <label className='expire'>EXP. DATE (MM/YY) 
        </label> 
        <label className='cvc'>CVC</label>
    
        <div className='row_form'>
            <input
            type="number"
            onChange={handleNumberInputMM}
            name="input3"
            value={inputValues.input3}
            //onChange={handleInput}
     
            placeholder='MM'>
            </input> 

            <input
            type="number"
            onChange={handleNumberInputYY}
            name="input4"
            value={inputValues.input4}
            //onChange={handleInput}
      
            placeholder='YY'>
            </input>
            
            <input
            type="number"
            onChange={handleNumberInputCVV}
            name="input5"
            value={inputValues.input5}
            //onChange={handleInput}
     
            placeholder='e.g. 123'>
            
            </input>
           

        </div>
        <Colors/>
        <button >Confirm</button>
        </form>
    )
}


export default Form