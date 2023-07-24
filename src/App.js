import './styles/App.scss'
import { AiOutlineBank } from 'react-icons/ai';
import {LuNfc} from 'react-icons/lu'; 
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';
function App() {
  return (
    <div className="App">

      <div className="CardCraft">
 
        <div className="CardCraft_card">

          <div className="card_front">
          
          <div className='front_icons'>
            <AiOutlineBank/>
            <LuNfc/>   
          </div>

              <p className='front_number'>1234 5678 9101 1121</p>
              <div className='card_details'>
                <p> 
                  <span>John </span>
                  <span>Doe</span>
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

        <form className="CardCraft_form">
          <div className='column_form'>
            <label>CARDHOLDER NAME</label>
            <input 
            placeholder='e.g. John Doe'>
            </input>

            <label>CARDHOLDER NUMBER</label>
            <input
            placeholder='e.g. 1234 5678 9101 1121'>
            </input>
          </div>

          
          <label className='expire'>EXP. DATE (MM/YY) 
          </label> 
          <label className='cvc'>CVC</label>
          

            <div className='row_form'>
            <input
            placeholder='MM'>
            </input> 

            <input
            placeholder='YY'>
            </input>

            
            <input
            placeholder='e.g. 123'>
            </input>
          </div>

          <button>Confirm</button>
        </form>


     </div>
    </div>
  );
}

export default App;
