const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const RegisterModel = require ('./pages/Register')

app.use(express.json());
app.use(cors);
    mongoose.connect("mongodb://localhost:27017/employees", {
    useNewUrlParser: true}, (err) => {
        if (!err) {console.log("Connected to the database")}
        else{
            console.log("error connecting to the database: " + err);
        }
        });


app.post("/Register", async(req, res)=>{

    console.log(req.body)
    res.send('here')
    console.log('here')
    /*const fullName = req.body.fullName
    const staffNo = req.body.staffNo
    const occupation = req.body.occupation
    const email = req.body.email
    const rate = req.body.rate

    const register = new RegisterModel({fullName:fullName,staffNo:staffNo,occupation:occupation,email:email,rate:rate });
    
    try {
        await register.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }*/
});

app.use('/', (req, res)=>{
    res.send('enspoint')
})

app.listen(3001, () =>{
    console.log("Server running on port 3001...");
});

