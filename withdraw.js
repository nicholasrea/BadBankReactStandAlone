function Withdraw() {
  const ctx = React.useContext(UserContext);
  
  return(
    <Form
      type='input'
      name='name'
      placeholder='name'
      
      />
    // Commented out for testing, Uncomment for functionality
    // <Transaction id="Withdraw" />
  );
}