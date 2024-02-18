import './AStore.css';
import Table from '../../components/Table/Table';
const AStore = ({logo})=> {
 
  return (

   
       
      <body className="App-header">
       <div className="App">
        <img src={logo} className="App-logo" alt="logo" /> 
        <h4 className='textA'>Alpha Store</h4>
      
       <div className='input-container' >

        <Table/>
         
        </div>
         </div>
      </body>
       
   
  );
}

export default AStore;
