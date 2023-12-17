const CustomOptions = ({ id, options }) => {
  
  return (
    <div >      
      {options.map((option) => {
        return <div key={option}>          
          <input type="radio" id={option} name={id} value={option} />
          <label htmlFor={id}> {option}</label>
        </div>
          
      })}
    </div>)
}
export default CustomOptions