import React, { useState, useRef } from "react";
import { AiOutlineBank } from 'react-icons/ai';
import {LuNfc} from 'react-icons/lu'; 
import {FaCcMastercard, FaCcVisa, FaCcJcb, FaCcDinersClub, FaCcDiscover } from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si'
import {RiSecurePaymentLine} from 'react-icons/ri';
import Colors from "./Colors";

function Card({ inputValues }) {

    const addSpacesToNumber = (number) => {
        return number.replace(/\s/g, '').replace(/(.{4})/g, '$1 '); 
    }
    const expire = (num) => {
        if(num !== '') {
            return num +  ' / '
        }
    } 

    const getPaymentNetworkIcon = (number) => {
        
        if(number.substring(0,4) == '3068') {
            return <FaCcDinersClub className="dc"/> 
        }
        else if(number.substring(0,4) == '3069') {
            return <FaCcDinersClub className="dc"/>   
        }

        if(number.substring(0,2) == '34') {
            return <SiAmericanexpress className="amex" />
        }
        else if(number.substring(0,2) == '37') {
            return <SiAmericanexpress className="amex" />
        }

        if(number.substring(0,1) == '') {
            return <RiSecurePaymentLine />
        }
        if(number.substring(0,1) == '4') {
            return <FaCcVisa className="visa" />
        }
        else if(number.substring(0,1) === '5') {
            return <FaCcMastercard className="mastercard" />
        }
        else if(number.substring(0,1) === '2') {
            return <FaCcMastercard className="mastercard" />
        }
        else if(number.substring(0,1) == '3') {
            return <FaCcJcb className="jcb"/> 
        }
        else if(number.substring(0,1) == '6') {
            return <FaCcDiscover className="discover"/>;
        }
        else if(number.substring(0,1) == '1' || '7' || '8' || '9' || '0') {
            return <RiSecurePaymentLine/>
        }

    };  

    const [selectedGradient, setSelectedGradient] = useState(null);

    return(
        <div className="CardCraft_card">
            <div className="card_front" 
                style={{
                    background: `linear-gradient(to right, ${selectedGradient})`,
                    position:"relative",

                }}
                
            >
                
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
            
            </div>
           
        </div>
        <Colors setSelectedGradient={setSelectedGradient}/>

        <div className="card_reverso">
            <hr></hr>
            <div>{inputValues.input5}</div>
        </div>
        
 
        </div>
        
        
        
    )
}
export default Card
