import './App.css';
import Table from '../components/Table/Table';
const AStore = ({logo})=> {
 
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='textA'>Alpha Store</p>
        
       <div className='input-container' >

        <Table/>
         
        </div>
        
      </header>
       
    </div>
  );
}

export default AStore;
