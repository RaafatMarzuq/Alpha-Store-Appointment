const express = require('express');
const { async } = require('jshint/src/prod-params');
const app = express();
const mongodb = require('./MongoDB/mongoDB')
app.use(express.json())
app.set('view engine', 'ejs')
const PORT = 3001

app.get('/admins', async (req,res)=>{
    const data =await mongodb.getData('admins')
    console.log("herererererer")
    const note = {
        note : "No admins today" 
    }
    !data ? res.status(200).send(note): res.status(200).send(data);
})
app.get('/appointment', async (req,res)=>{
    const data =await mongodb.getData('appointment')
    const note = {
        note : "No appointments today" 
    }
    !data ? res.status(200).send(note): res.status(200).send(data); 
    
})

app.listen(PORT, () => console.log(`Listening Socket on http://localhost:${PORT}`));
