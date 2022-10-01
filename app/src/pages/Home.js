import './App.css';

import Button from '../components/Button/Button';

const Home = ({logo})=> {
   const onUserClick = ()=>{
     window.location.href='/users';
   }
   const onAdminClick = ()=>{
     window.location.href='/pass';
   }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div className='input-container' >

        <Button  id='users' href='/users' buttonName='לקוח'  onClick={onUserClick}/>
        <Button  id='admin' href='/pass' buttonName= 'אדמין' onClick={onAdminClick} />
         
        </div>
        
      </header>
       
    </div>
  );
}

export default Home;
