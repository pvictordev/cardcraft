import React, {} from "react";


const Colors = ({setSelectedGradient}) => {
    
    const colorGradients = [
        "#000000, #434343",
        "#8693AB, #BDD4E7",
        "#5F0A87, #A4508B", 
        "#B82E1F, #000000",
        "#380036, #0CBABA", 
      
    ];
    const handleColorClick = (gradient) => {
        setSelectedGradient(gradient)
    };


    return(

        <div className="Colors">
        {colorGradients.map((gradient, index) => (
            <div
                key={index}
                className={`Colors_${index + 1}`}
                style={{ background: `linear-gradient(to right, ${gradient})` }}
                onClick={() => handleColorClick(gradient)}
            ></div>
        ))}
    </div>


      
    )
}


export default Colors