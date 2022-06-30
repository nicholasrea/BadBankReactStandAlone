function BankForm(props){

  const [name, setName]           = React.useState('')
  const [email, setEmail]         = React.useState('')
  const [password, setPassword]   = React.useState('')

  return(
    
    <>
      <h1>{props.label}</h1>
      Name:
      <input 
        type="input"
        className="form-control"
        id="name"
        placeholder="Username"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      Email Address:
      <input
        type="input"
        className="form-control"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      Password:
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <button
        type="submit"
        className="btn btn-light"
        onClick={props.handle(name, email, password)}
        >Create Account</button>
    </>

  );
}