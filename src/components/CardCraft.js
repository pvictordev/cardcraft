import React, {useState} from "react"; 
import Card from "./Card"; 
import Form from "./Form";

function CardCraft() {
    const [inputValue, setInputValue] = useState(''); 

    const handleChange = (value) => {
        setInputValue(value)
    }


    return(
        <div className="CardCraft">
            <Card inputValue={inputValue}/>
            <Form onChange={handleChange}/>
        </div>
    )
    
}

export default CardCraft