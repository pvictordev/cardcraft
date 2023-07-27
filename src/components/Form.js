import React, {useState} from "react";

function Form(props) {
    const handleChange = (event) => {
        const value = event.target.value;
        props.onChange(value); 
      };


    return (
        <form className="CardCraft_form">
        <div className='column_form'>
            <label>CARDHOLDER NAME</label>

            <input
            placeholder='e.g. John Doe'>
            </input>

            <label>CARDHOLDER NUMBER</label>
            <input
            // value={inputNumber}
            onChange={handleChange} 
            maxLength={16}
            placeholder='e.g. 1234567891011121'>
            </input>

             {/* need to import    */}
          
            
        </div>

        
        <label className='expire'>EXP. DATE (MM/YY) 
        </label> 
        <label className='cvc'>CVC</label>
        

            <div className='row_form'>
            <input
            maxLength={2}
            placeholder='MM'>
            </input> 

            <input
            maxLength={2}
            placeholder='YY'>
            </input>

            
            <input
            maxLength={3}
            placeholder='e.g. 123'>
            
            </input>
        </div>

        <button >Confirm</button>
        </form>
    )
}


export default Form