const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config();
var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
   
var DATE = year + "-" + month + "-" + day;
// Replace the following with your Atlas connection string  
                                                                                                                                    
const url =" ";  
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 // The database to use
 const dbName = "Alpha-Store";
                      
 async function addAppointment(personDocument) {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"

         const col = db.collection("appointment");                                                                                                                                                            
         const query= {};
         let data =  await col.find(query).toArray();
         let bool = true;

        data.filter( (appointment) =>{appointment.date === personDocument.date})
         let time= personDocument.time.split(":")
         time = parseInt(time[0])*60 + parseInt(time[1])
         data.forEach((appointment) =>{
                let appointment_time = appointment.time.split(":");
                appointment_time = parseInt(appointment_time[0])*60 + parseInt(appointment_time[1]);
                let dt =(time-appointment_time);

                if( (  Math.abs(dt) >= 0) &&  (Math.abs(dt)<= 30)  ){
                 bool =false ;
             }
         })
         // Insert a single document, wait for promise so we can read it back
        if(bool){
            const p = await col.insertOne(personDocument);
            console.log("inserted")
            await client.close();
            return true;
        }else{
            await client.close();
            return false;
        }
        
        

        } catch (err) {
         console.log(err.stack);
     }
 
    
}
 async function getData(collectionName) {
    try {

         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "admins/appointments"

         const col = db.collection(collectionName);                                                                                                                                                            
         
     // Find one document
        
        var query = { date : DATE };
        const sort = { time: 1 }
         const myDoc = await col.find(query).sort(sort).toArray();
         // Print to the console
        //  console.log(myDoc);
        
         await client.close();
            return myDoc;
        } catch (err) {
         console.log(err.stack);
     }
 
  
}
    
//   let data = {name:"סאמר",time:"10:30",dogtype:"רועה בלגי",date:"2022-10-02"}
//    addAppointment(data);
// run().catch(console.dir);
 module.exports.addAppointment= addAppointment;
 module.exports.getData= getData;