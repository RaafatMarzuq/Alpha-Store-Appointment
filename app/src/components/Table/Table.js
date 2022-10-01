import './style.css';
import  { useState, useEffect } from 'react'
import axios from 'axios'

// function DataFetching(){
   
   
// }

// const data = [
//   { name: "סאמר", time: "12:25", dogtype: "רועה גרמני" },
//   { name: "מוניר", time: "13:20", dogtype: "הסקי" },
//   { name: "אבי", time: "17:00", dogtype: "צ'ואוא"},
 
// ]
  
function Table() {

  const [appointment, setAppointment] = useState([])
  useEffect( ()=> {
      axios.get( 'http://localhost:3001/appointment')
      .then(res => {
          console.log(res.data)
          setAppointment(res.data)
      }).catch( err => {
          console.log(err)
      })
  } , [])
  return (
    <div className="Table">
      <table>
        <tr>
          <th>סוג כלב</th>
          <th>שעה</th>
          <th>שם</th>
        </tr>
        {appointment.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.dogtype}</td>
              <td>{val.time}</td>
              <td>{val.name}</td>

            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default Table;