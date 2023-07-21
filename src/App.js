import './styles/App.scss'
function App() {
  return (
    <div className="App">

      <div className="CardCraft">

        <form className="CardCraft_form">
          <label>CARDHOLDER NAME</label><input></input>
          <label>CARDHOLDER NUMBER</label><input></input>
          <label>EXP. DATE (MM/YY) </label> <input></input> <input></input>
          <label>CVC</label><input></input>
          <button>Confirm</button>
        </form>
        
        <div className="CardCraft_card">
          <div className="card_front"></div>
          <div className="card_reverso"></div>
        </div>


     </div>
    </div>
  );
}

export default App;
