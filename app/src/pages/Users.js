// import logo from './My-project-1.png';
import './App.css';
import Input from '../components/InputBox/Input';
import Button from '../components/Button/Button';
function Users({logo}) {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <div className='input-container' >
        <Input id="Name" type="text" title="DogName" text= '  שם מלא  ' />
        <Input id="PhoneNumber" type="text" title="DogName" text= ' מס טלפון' />
        <Input id="Date" type="datetime-local" title="DogName" text= ' תאריך ' />
        <Input id="DogType" type="text" title="DogName" text= ' סוג הכלב  ' />
        <Button id= 'user' href='' buttonName='קביעת תור' />
        </div>
      </header>
     
    </div>
  );
}

export default Users;
