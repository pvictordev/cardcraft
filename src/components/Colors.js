import React, {} from "react";


const Colors = ({setSelectedGradient}) => {
    
    const colorGradients = [
        "#000000, #434343",
        "#8693AB, #BDD4E7",
        "#5F0A87, #A4508B", 
        "#B82E1F, #000000",
        "#380036, #0CBABA",
        // Добавьте остальные градиенты
    ];
    const handleColorClick = (gradient) => {
        setSelectedGradient(gradient)
        
    };


    return(
        // <div className="Colors">
        //     <div className="Colors_1"></div>
        //     <div className="Colors_2"></div>
        //     <div className="Colors_3" ></div>
        //     <div className="Colors_4" ></div>
        //     <div className="Colors_5"></div>
        // </div> 
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