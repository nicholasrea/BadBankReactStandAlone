function Transaction(props) {
  const ctx = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);

  // sets an inital value for the context array, will utilize later for user login functionality
  let user = 0;
  const disable = (!transaction);
  //retrives the balance from the context, in an editable format
  let balancectx = (user) => {
    const context = React.useContext(UserContext);
    let balance = context.users[user].balance;
    console.log(balance);
    return balance;
  };

  let validateTrans = (trans, balance) =>{
    if(isNaN(trans)){
      setStatus('Please enter a valid Number')
      setTimeout(() => setStatus(''), 5000);
      return false;
    }

    if(trans < 0){
      setStatus('Please enter a number greater than 0')
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
    
    if(trans > balance){
      setStatus('Insuffcient Funds');
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
    return true;
  }
  

  //sets the balance state to the current blanace from the context based on which user
  if (!balance) setBalance(parseFloat(balancectx(user)));

  function handleTransaction() {
    let user = 0;
    let newBalance;

    // needed because transaction gets stored as a string
    let trans = parseFloat(transaction);

    // determins if transaction is a deposit or withdraw
    if (props.id === "Deposit") newBalance = balance + trans;
    if (props.id === "Withdraw"){
      if (!validateTrans(trans, balance)){
        clearForm();
        return; 
      }
        newBalance = balance - trans;
    }    
    // changes the global context to the new value
    ctx.users[user].balance = newBalance;

    // updates balance state for the page
    setBalance(newBalance);

    setShow(false);
  }

  function clearForm() {
    setTransaction('')
    setShow(true);
  }
  
 
  return (
    <Card
      bgcolor="primary"
      header={props.id}
      title={`Balance: $ ${balance}`}
      status={status}
      body={show ? (
        <>
          <input
            type="number"
            className="form-control"
            id={props.id}
            placeholder={props.id}
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              handleTransaction();
            }}
            disabled={disable}
          >
            {props.id}
          </button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <h5>Thank you for your {props.id}</h5>
          <button 
            type="submit" 
            className="btn btn-light" 
            onClick={clearForm} 
          >  
          Make Another {props.id}
        </button>
        </>
      )}
    />
  );
}
