import React, {useState, useRef} from "react";

function Form({ inputValues, onInputChange }) {

    const handleInput = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    };

    const handleNumberInput16 = (e) => {
    const { name, value } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");

    const maxLength = 16; 
    const truncatedValue = onlyNumbers.slice(0, maxLength);
    onInputChange(name, truncatedValue);
    };

    const handleNumberInput2 = (e) => {
    const { name, value } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");
    
    const maxLength = 2; 
    const truncatedValue = onlyNumbers.slice(0, maxLength);
    onInputChange(name, truncatedValue);
    };
    
    const handleNumberInput3 = (e) => {
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
            onChange={handleNumberInput16}
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
            onChange={handleNumberInput2}
            name="input3"
            value={inputValues.input3}
            //onChange={handleInput}
     
            placeholder='MM'>
            </input> 

            <input
            type="number"
            onChange={handleNumberInput2}
            name="input4"
            value={inputValues.input4}
            //onChange={handleInput}
      
            placeholder='YY'>
            </input>
            
            <input
            type="number"
            onChange={handleNumberInput3}
            name="input5"
            value={inputValues.input5}
            //onChange={handleInput}
     
            placeholder='e.g. 123'>
            
            </input>
        </div>

        <button >Confirm</button>
        </form>
    )
}


export default Form