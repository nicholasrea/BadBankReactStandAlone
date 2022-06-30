function CreateAccount() {
  const ctx = React.useContext(UserContext)

  function handle(data){
    ctx.users.push({name: data.name, email: data.email, password: data.password, balance:100})
    console.log("success")
    return true;
  }

  return (
    <BankForm
      bgcolor="primary"
      label="Create Account"
      handle={handle}
      hideAmount={true}
      successBtn="Ceate another account"
    />
  );
  
}