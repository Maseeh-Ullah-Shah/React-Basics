
import { createRoot } from 'react-dom/client'
import './index.css'
import EmployeeCard from './App.jsx'

const employee = {
   name: "Ali",
  designation: "Frontend Developer",
  salary: 80000
}
createRoot(document.getElementById('root')).render(
  <>
    <EmployeeCard employee = {employee}/>
  </>
 )
 props  = {
  info : {
    name : "Sara",
    age : 20
  },
  city:"Lahore",
  marks : 95
 };


