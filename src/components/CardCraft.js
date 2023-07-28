import React, {useState} from "react"; 
import Card from "./Card"; 
import Form from "./Form";

function CardCraft() {

    const [inputValues, setInputValues] = useState({
        input1:'', 
        input2:'', 
        input3:'', 
        input4:'', 
        input5:'',         

    })
    const handleInputChange = (name, value) => {
        setInputValues({...inputValues, [name]:value});
    }

    return(
        <div className="CardCraft">
            <Card inputValues={inputValues} />
            <Form inputValues={inputValues} onInputChange={handleInputChange}  />
        </div>
    )
    
}

export default CardCraft