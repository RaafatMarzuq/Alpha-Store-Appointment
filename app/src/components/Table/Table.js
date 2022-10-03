import './style.css';
import  { useState, useEffect } from 'react'
import axios from 'axios'


  
function Table() {
  const [loading, setLoading] = useState(0)
  const [appointment, setAppointment] = useState([])
  setTimeout(()=> setLoading(loading=> loading+1),1800000)
  useEffect( ()=> {
      axios.get('https://appointment-api1.herokuapp.com/appointment')
      .then(res => {
          console.log(res.data)
          setAppointment(res.data)
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
        {appointment.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.dogtype ? val.dogtype: "" }</td>
              <td>{val.time ? val.time : ""}</td>
              <td>{val.name ? val.name : "אין תורים היום"}</td>

            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default Table;