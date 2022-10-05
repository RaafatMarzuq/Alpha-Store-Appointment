import './App.css';
import Table from '../components/Table/Table';
const AStore = ({logo})=> {
 
  return (

    <div className="App">
       
      <body className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" /> 
        <h4 className='textA'>Alpha Store</h4>
      
       <div className='input-container' >

        <Table/>
         
        </div>
        
      </body>
       
    </div>
  );
}

export default AStore;
