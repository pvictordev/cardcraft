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

    const [backgroundImage, setBackgroundImage] = useState(null);
    const fileInputRef = useRef(null);
    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageURL = URL.createObjectURL(file);
          setBackgroundImage(`url(${imageURL})`);
        }
    };
      
    const handleCardFrontClick = () => {
        fileInputRef.current.click();
    };

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
                    

                    // background: ` ${backgroundImage} 0 0/cover no-repeat`,
                    background: `linear-gradient(to right, ${selectedGradient || "#000000"}, ${selectedGradient ? "black" : "434343"}) ${backgroundImage ? `url(${backgroundImage})` : ''} 0 0/cover no-repeat`,
                    
                    
                   
                    position:"relative",

                }}
                onClick={handleCardFrontClick} 
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
        
        <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
        />
       
        
        </div>
        
        
        
    )
}
export default Card

//visa = '4'
//masterCard = '5' or '2'
//amx = '3', '4' or '7'
//discover = '6'
//jcb = '3'
//dc = '3', '0', '6', '8' or '9' 

{/* <FaCcVisa className='visa'/> */}
{/* <FaCcMastercard className='mastercard'/> */}
{/* <SiAmericanexpress className="amx"/> */}
{/* <FaCcJcb className="jcb"/> */}
{/* <FaCcDinersClub className="dc"/> */}
{/* <FaCcDiscover className="discover"/> */}