// import logo from './My-project-1.png';
import './User.css';
import Input from '../../components/InputBox/Input';
import Button from '../../components/Button/Button';
function Users({logo}) {
  
  return (
      <body className="App-header"> 
        <div className="App">

          <img src={logo} className="App-logo" alt="logo" />

          <div className='input-container1' >
            <Input id="Name" type="text" title="DogName" text= '  שם מלא  ' />
            <Input id="PhoneNumber" type="text" title="DogName" text= ' מס טלפון' />
            <Input id="Date" type="datetime-local" title="DogName" text= ' תאריך ' />
            <Input id="DogType" type="text" title="DogName" text= ' סוג הכלב  ' />
            <Button id= 'user'  buttonName='קביעת תור' />
            </div>
        </div>
      </body>
     
    
  );
}

export default Users;
