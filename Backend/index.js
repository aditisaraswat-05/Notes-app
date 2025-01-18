import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
dotenv.config()


const PORT= process.env.PORT
const app=express()


app.use('/auth',AutRoutes)

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);

})