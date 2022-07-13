function Spa() {
  return (
    <HashRouter>
      <NavBar/>  
      <UserContext.Provider value={{users :[{name: 'nicholas', email:'n.rea08@gmail.com', password:'J@ke8385', balance: 10000}]}}>
        <div className="container" style={{padding:"20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
