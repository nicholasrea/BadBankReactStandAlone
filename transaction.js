function Transaction(props) {
  const ctx = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState("");
  const [balance, setBalance] = React.useState("");

  // sets an inital value for the context array, will utilize later for user login functionality
  let user = 0;

  //retrives the balance from the context, in an editable format
  let balancectx = (user) => {
    const context = React.useContext(UserContext);
    let balance = context.users[user].balance;
    console.log(balance);
    return balance;
  };

  //sets the balance state to the current blanace from the context based on which user
  if (!balance) setBalance(parseFloat(balancectx(user)));

  function handleTransaction() {
    let user = 0;
    let newBalance;

    // needed because transaction gets stored as a string
    let trans = parseFloat(transaction);

    // determins if transaction is a depsoit or withdraw
    props.id == "Deposit"
      ? (newBalance = balance + trans)
      : (newBalance = balance - trans);
    // debug testing
    console.log("Old balance:" + balance + " is #" + typeof balance);
    console.log("trans: " + trans + " is #" + typeof trans);
    console.log("new balance: " + newBalance + " is #" + typeof newBalance);

    // changes the global context to the new value
    ctx.users[user].balance = newBalance;

    // updates balance state for the page
    setBalance(newBalance);
  }

  return (
    <>
      <h1>Balance: ${balance}</h1>
      <h1>
        {props.id}
        <br />
        <input
          type="number"
          className="form-control"
          id={props.id}
          placeholder={props.id}
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
        />
      </h1>

      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          handleTransaction();
        }}
      >
        {props.id}
      </button>
    </>
  );
}
