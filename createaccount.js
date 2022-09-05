function CreateAccount() {
  const [show, setShow]                = React.useState(true);
  const [status, setStatus]            = React.useState('');
  const [name, setName]                = React.useState('');
  const [email, setEmail]              = React.useState('');
  const [password, setPassword]        = React.useState('');
  const ctx = React.useContext(UserContext);

  //TODO: Increase validation for email and password
  function validate(field, label){
    if(!field){
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }
  
  function handleCreate(){
    if(!validate(name, 'name')) return;
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return
    ctx.users.push({name, email, password, balance:100}); 
    setShow(false);
  }

  function clearForm(){
    setName('');
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
            name="name"
            type="input"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          /><br/>
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
 
