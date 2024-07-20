import 'dotenv/config'
import express from 'express'
import os from 'os'
import cors from 'cors'
import jsonDataRoutes from './routes/createJsonData.routes.js'
const app = express()
const PORT=process.env.PORT||3000

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({working:true})
})

app.use('/api/v1/data', jsonDataRoutes)
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Something went wrong!');
});

app.use('/',(req,res)=>{
    res.status(400).json({sucess:false,error:404})
})

app.listen(PORT, () => {
    console.log("http://localhost:3000")
    console.log({cpus:os.cpus().length})
})
