import React, {} from "react";


const Colors = ({setSelectedGradient}) => {
    const colorGradients = [
        "#000000, #434343",
        "#9796f0, #fbc7d4",
        "#FC466B, #3F5EFB", 
        "#59C173, #a17fe0, #5D26C1",
        "#000046, #1CB5E0",


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