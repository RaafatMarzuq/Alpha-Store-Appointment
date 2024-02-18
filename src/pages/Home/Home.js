import './Home.css';

import Button from '../../components/Button/Button';
import {useNavigate} from "react-router-dom"


const Home = ({logo})=> {
  const [toPage,setToPage] = useState("")
  let navigate = useNavigate();
    useEffect(()=> {
     toPage ==="Home"? navigate(`/`):navigate(`/${toPage}`)
    },[toPage,navigate])
   
    function onClick(page){
      setToPage(page)
      
    }

  return (
   
   
      <body className="App-header"> 
        <div className="home">     
          <div className='input-container' >
            <img src={logo} className="App-logo" alt="logo" />
            <Button  id='users'  buttonName='לקוח'  onClick={()=>{onClick("users")}}/>
            <Button  id='admin'  buttonName= 'אדמין' onClick={()=>{onClick("pass")}} /> 
            </div>
        </div>
      </body>
       
    
  );
}

export default Home;
