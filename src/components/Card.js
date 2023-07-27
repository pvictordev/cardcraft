import React from "react";
import { AiOutlineBank } from 'react-icons/ai';
import {LuNfc} from 'react-icons/lu'; 
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';

function Card(props) {
    return(
        <div className="CardCraft_card">

        <div className="card_front">
        
        <div className='front_icons'>
            <AiOutlineBank/>
            <LuNfc/>   
        </div>
            
            <p className='front_number'>{props.inputValue}</p>

            <div className='card_details'>
                <p> 
                <span>John Doe</span>             
                </p> 
            
                {/* <span>01</span> / <span>00</span> */}
                <span>01/12</span>
            </div>
        

            <div className='paymentNetwork'>
            <FaCcVisa className='visa'/>
            {/* <FaCcMastercard className='mastercard'/> */}
            </div>

        </div>
        <div className="card_reverso">
            <hr></hr>
            <div>000</div>
        </div>
        </div>
    )
}
export default Card