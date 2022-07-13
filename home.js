function Home() {
  return(
    <Card 
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the BadBank"
      text="Here for all of our bad banking needs"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );
}