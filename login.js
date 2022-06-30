function Login() {
  const ctx = React.useContext(UserContext);
  return(
   <Card
    txtcolor="black"
    title="Login"
    text="Login to your account"
    body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );
}