import './style.css';
import  { useState, useEffect } from 'react'
import axios from 'axios'


  
function Table() {
  const [loading, setLoading] = useState(0)
  const [appointment, setAppointment] = useState([])
  setTimeout(()=> setLoading(loading=> loading+1),1800000)
  useEffect( ()=> {
      axios.get('https://appointment-api1-0ec8b494fd57.herokuapp.com/appointment')
      .then(res => {
        
        res.data ? setAppointment(res.data) 
        : setAppointment({ 
          name : "אין תורים היום",
          dogtype :"" ,
          time : ""
        })
      }).catch( err => {
          console.log(err)
      })
  } , [loading])
  return (
    
    <div className="Table">      
      <table>
        <thead>
        <tr>
          <th>סוג כלב</th>
          <th>שעה</th>
          <th>שם</th>
        </tr>
        </thead>
        { appointment.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.dogtype }</td>
              <td>{val.time }</td>
              <td>{val.name }</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default Table;