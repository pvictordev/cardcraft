import React, { useState } from "react";
import { AiOutlineBank } from 'react-icons/ai';
import {LuNfc} from 'react-icons/lu'; 
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';

function Card({ inputValues }) {

    const hasText = React.Children.toArray('cardDet').some(
        (child) => typeof child === 'string'
      );
    return(
        <div className="CardCraft_card">

        <div className="card_front">
        
        <div className='front_icons'>
            <AiOutlineBank/>
            <LuNfc/>   
        </div>
            
            <p className='front_number'>{inputValues.input1}</p>

            <div className='card_details'>
                <p> 
                <span>
                    {inputValues.input2}</span> 
                                
                </p> 

                <p>
                <span className="cardDet">{inputValues.input3}</span> <span>{inputValues.input4}</span>
                </p>
            </div>
        

            <div className='paymentNetwork'>
            <FaCcVisa className='visa'/>
            {/* <FaCcMastercard className='mastercard'/> */}
            </div>

        </div>
        <div className="card_reverso">
            <hr></hr>
            <div>{inputValues.input5}</div>
        </div>
        </div>
    )
}
export default Card