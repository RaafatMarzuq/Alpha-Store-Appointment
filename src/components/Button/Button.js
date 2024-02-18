import './style.css'
import axios from 'axios';
import  { useEffect, useState  } from 'react'

const Button = ({id,buttonName ,onClick}) =>{
       const [appointment, setAppointment] = useState([])
        // const [isLoading,setIsLoading]=useState(false)
       useEffect( ()=>{
        async function fetchData(){
                await axios.post('https://appointment-api1.herokuapp.com/appointment',appointment ).then(res => {
                                !res.data.note ?   alert("התור נקבע\nתודה רבה ") : alert(res.data.note)
                                
                                })
        }
        fetchData();
       },[appointment])
       
        const onUserClick =async ()=>{
                let Name,Date,PhoneNumber,DogType;

                Name =  document.getElementById("Name").value;
                Date=  document.getElementById("Date").value;
                PhoneNumber=  document.getElementById("PhoneNumber").value;
                DogType=  document.getElementById("DogType").value;
                Date= Date.split("T")
                let time = Date[1]
                Date=Date[0]
                if(Name && Date && time && PhoneNumber && DogType){
                 setAppointment(
                        {
                                name : Name,
                                phoneNumber:PhoneNumber,
                                time :time,
                                date : Date,
                                dogtype: DogType
                        }
                )
                // setIsLoading(true)

             
                

                }else {
                        alert(`אחד או יותר מהפרטים חסרים`)
                }
                
        }
        // useEffect( ()=> {
                
                 
        //  } , [])
        return (
        <div  >
        <button  className="button"  onClick={id === 'user' ? onUserClick : onClick} type="button"  >{buttonName}</button>
        </div>
        )
}

export default Button;