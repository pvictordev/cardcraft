import React, {useState, useRef} from "react";

function Form({ inputValues, onInputChange }) {

    const handleInput = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value);
      };

    return (
        <form className="CardCraft_form">
        <div className='column_form'>
            <label>CARDHOLDER NUMBER</label>
            <input
           
            name="input1"
            value={inputValues.input1}
            onChange={handleInput}

            maxLength={16}
            placeholder='e.g. 1234567891011121'>
            </input>

            <label>CARDHOLDER NAME</label>
            <input
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
            name="input3"
            value={inputValues.input3}
            onChange={handleInput}

            maxLength={2}
            placeholder='MM'>
            </input> 

            <input
            
            name="input4"
            value={inputValues.input4}
            onChange={handleInput}

            maxLength={2}
            placeholder='YY'>
            </input>
            

            
            <input
            name="input5"
            value={inputValues.input5}
            onChange={handleInput}

            maxLength={3}
            placeholder='e.g. 123'>
            
            </input>
        </div>

        <button >Confirm</button>
        </form>
    )
}


export default Form