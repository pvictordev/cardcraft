import React, { useState } from "react";
import { AiOutlineBank } from 'react-icons/ai';
import {LuNfc} from 'react-icons/lu'; 
import {FaCcMastercard, FaCcVisa, FaCcJcb, FaCcDinersClub, FaCcDiscover } from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si'
import {RiSecurePaymentLine} from 'react-icons/ri'

//visa = '4'
//masterCard = '5' or '2'
//amx = '3', '4' or '7'
//discover = '6'
//jcb = '3'
//dc = '3', '0', '6', '8' or '9' 

function Card({ inputValues }) {

    const [paymentNetwork, setPaymentNetwork] = useState(null);
    const addSpacesToNumber = (number) => {
        return number.replace(/\s/g, '').replace(/(.{4})/g, '$1 '); 
    }
    const expire = (num) => {
        if(num !== '') {
            return num +  ' / '
        }
    } 

    const getPaymentNetworkIcon = (number) => {
        const firstDigit = number.substring(0,1);
    
        switch (firstDigit) {
            case '4':
                return <FaCcVisa className='visa'/>;
            case '5':
            case '2':
                return <FaCcMastercard className='mastercard'/>;
            case '6':
                return <FaCcDiscover className="discover"/>;
            case '3':
                return <FaCcJcb className="jcb"/> 
            case '34':
            case '37':
                return <SiAmericanexpress className="amx"/>;  
            
            case '3068':
            case '3069':
                return <FaCcDinersClub className="dc"/> 
            
            default:
                return <RiSecurePaymentLine/>;
        }
       
    };
    

    return(
        <div className="CardCraft_card">

        <div className="card_front" >
        
        <div className='front_icons'>
            <AiOutlineBank/>
            <LuNfc/>   
        </div>
            
            <p className='front_number'>{addSpacesToNumber(inputValues.input1)} </p>

            <div className='card_details'>
                <p> 
                <span>
                    {inputValues.input2}</span> 
                                
                </p> 

                <p>
                <span className="cardDet">{expire(inputValues.input3)}</span><span>{inputValues.input4}</span>
                </p>
            </div>
        
            <div className='paymentNetwork'>
                {getPaymentNetworkIcon(inputValues.input1)}

            {/* <FaCcVisa className='visa'/> */}
            {/* <FaCcMastercard className='mastercard'/> */}
            {/* <SiAmericanexpress className="amx"/> */}
            {/* <FaCcJcb className="jcb"/> */}
            {/* <FaCcDinersClub className="dc"/> */}
            {/* <FaCcDiscover className="discover"/> */}
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