const { MongoClient, ServerApiVersion } = require('mongodb')
 
// Replace the following with your Atlas connection string  
                                                                                                                                    
// const url = "mongodb+srv://raafat:<password>@cluster0.phfg8.mongodb.net/?retryWrites=true&w=majority";
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
         

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
        //  const myDoc = await col.findOne();
         // Print to the console
        //  console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
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
        var query = { };
         const myDoc = await col.find(query).toArray();;
         // Print to the console
         console.log(myDoc);
        
         await client.close();
            return myDoc;
        } catch (err) {
         console.log(err.stack);
     }
 
  
}
// const data = { 
//     name: "מוניר",
//     time: "13:20",
//      dogtype: "הסקי" 
// }
    
   
//    addAppointment(data);
 
// 
// run().catch(console.dir);
 module.exports.addAppointment= addAppointment;
 module.exports.getData= getData;