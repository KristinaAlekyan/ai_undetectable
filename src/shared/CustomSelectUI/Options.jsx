const CustomOptions = ({ id, options, withObjectOptions, handleChange}) => {
  
  return (
    <div >      
      {
        withObjectOptions ?
        options.map((option) => (
          <div key={option.field}>          
            <input type="radio" id={option.field} name={id} value={option.value} onChange={handleChange}/>
            <label htmlFor={option.field}> {option.value}</label>
          </div>
        )) :
        options.map((option) => (
          <div key={option}>          
            <input type="radio" id={option} name={id} value={option} onChange={handleChange}/>
            <label htmlFor={option}> {option}</label>
          </div>
        ))
      }
    </div>)
}

export default CustomOptions