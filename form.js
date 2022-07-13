function Form(props){
  const [value, setValue] = React.useState('')

  return(
    <>
      {props.name}<br/>
        <input 
          type={props.type}
          className="form-control"
          id={props.name}
          placeholder={props.placeholder} 
          value={props.value}
          onChange={e => setValue(e.currentTarget.value)}
        />

    </>
    
    
 );
}