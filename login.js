function Login(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    //TODO: Write Functionality for the Login
    function handleLogin(){
        console.log('Email logged on:' + email)
    }
    
    return (
        <Card
            bgcolor="primary"
            header="Login"
            body={
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
                        onClick={handleLogin}
                    >Login</button>
                </>
            }
        />
    )

}

