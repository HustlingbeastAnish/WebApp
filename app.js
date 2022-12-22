const express=require('express');
const mongoose=require('mongoose');
const app=express();
const DB='mongodb+srv://TeacherAdmin:TeacherAdmin123@cluster0.sldjher.mongodb.net/Stu_details?retryWrites=true&w=majority'

const Stuser=require('./models/stuschema');
app.use(express.json()); 
app.use(require('./router/teachaddstu.js'));

mongoose.set("strictQuery", false);
try {
    
      mongoose.connect(
      DB,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
  
 

 
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })
  
