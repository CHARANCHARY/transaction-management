const express = require('express')
const cors = require('cors')
const Mongoose = require('mongoose')
const Router = require('./routes/TransactionRoute')


const app = express()
app.use(cors())
app.use(express.json())

Mongoose.connect("mongodb+srv://charanchary:charan@cluster0.elarojj.mongodb.net/transaction-management?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("db connected"))
.catch(()=>console.log("db connection failed"))

app.use('/api',Router)

app.listen(4000,(req,res)=>{
    console.log("server started")
})