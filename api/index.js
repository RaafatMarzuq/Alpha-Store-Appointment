const express = require('express');
const app = express();
const mongodb = require('./MongoDB/mongoDB')

app.use(express.json())
const cors = require('cors');
app.use(cors());
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001





app.get('/', async (req,res)=>{
   
    const note = {
        note : "Welcome to my api" 
    }
     res.send(note);
})

app.get('/appointment', async (req,res)=>{
    const data =await mongodb.getData('appointment')
    const note = {
        note : "No appointments today" 
    }
    !data ? res.send(note): res.send(data); 
    
})
app.get('/admins', async (req,res)=>{
    const data =await mongodb.getData('admins')
    const note = {
        note : "No admins " 
    }
    !data ? res.send(note): res.send(data); 
    
})
app.post('/appointment', async (req,res)=>{
    
    if(req.body){
     let ans = await  mongodb.addAppointment(req.body)
     console.log(ans)
     if(ans) {
        res.status(200).send(req.body)
     }else   res.status(200).send({note : "התור הזה לא פנוי ,תנסה לקבוע בזמן שונה"})

      
   }
   
})

app.listen(PORT, () => console.log(`Listening Socket on http://localhost:${PORT}`));
