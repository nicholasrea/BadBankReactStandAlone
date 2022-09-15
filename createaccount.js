function CreateAccount() {
  const [show, setShow]                = React.useState(true);
  const [status, setStatus]            = React.useState('');
  const [email, setEmail]              = React.useState('');
  const [password, setPassword]        = React.useState('');
  const ctx = React.useContext(UserContext);


  // Validation for email address and password
  function validate(field, label){
    // Validates if there is a valuse or not
    if(!field){
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    // Strong validation for password 1 upper and lower case, 1 number and 1 special char
    if(label === 'password'){
      const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      const testValue = regex.test(field)
      if(!testValue){
        setStatus('Please Enter a strong password'); 
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
    }
    return true;
  }
  
  function handleCreate(){
    
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return

    //TODO: POST to server the new account
    ctx.users.push({email, password, balance:100}); 
    
    setShow(false);
  }

  // clears the state 
  function clearForm(){
    setEmail('');
    setPassword('');
    setStatus('');
    setShow(true);
  }

  return (
    <Card 
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          <Form
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          /><br/>
          <Form
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          /><br/>
          <button 
            type="submit" 
            className="btn btn-light" 
            onClick={handleCreate}
          >Create Account</button>      
        </>   
        ) : (
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>
            Add another account
          </button>
          </>
        )
      }
    />
  )
}
 
