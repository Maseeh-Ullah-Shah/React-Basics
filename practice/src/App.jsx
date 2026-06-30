let EmployeeCard = (props)=>{
  return (
    <div>
      <p>Name : {props.employee.name}</p>
      <p>Designation : {props.employee.designation}</p>
      <p>Salary : ${props.employee.salary}</p>
    </div>
  )
}

export default EmployeeCard;

