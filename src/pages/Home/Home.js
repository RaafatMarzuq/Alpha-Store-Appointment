import './Home.css';

import Button from '../../components/Button/Button';

const Home = ({logo})=> {
   const onUserClick = ()=>{
     window.location.href='/users';
   }
   const onAdminClick = ()=>{
     window.location.href='/pass';
   }

  return (
   
   
      <body className="App-header"> 
        <div className="home">     
          <div className='input-container' >
            <img src={logo} className="App-logo" alt="logo" />
            <Button  id='users'  buttonName='לקוח'  onClick={onUserClick}/>
            <Button  id='admin'  buttonName= 'אדמין' onClick={onAdminClick} /> 
            </div>
        </div>
      </body>
       
    
  );
}

export default Home;
