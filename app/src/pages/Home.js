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
     
      <body className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
       <div className='input-container' >

        <Button  id='users'  buttonName='לקוח'  onClick={onUserClick}/>
        <Button  id='admin'  buttonName= 'אדמין' onClick={onAdminClick} />
         
        </div>
        
      </body>
       
    </div>
  );
}

export default Home;
