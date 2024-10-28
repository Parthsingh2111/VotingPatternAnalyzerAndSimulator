import dotenv from "dotenv"
import express from "express"
const app = express();
const port = 4000
import mongoose from "mongoose"
import connectDB from "./db/dbDb.js";

dotenv.config({
    path: './.env'
})// neet to make change in package.json in script not changed yet




























 connectDB().then(()=>{

    app.on("error",(error)=>{
        console.log("ERRR: ", error);
        throw error
})
    
    app.listen(process.env.PORT|| 800, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
 })
.catch((err)=>{

    console.log("MONGO DB connection failed !!! ", err);

})


























// (async ()=>{

// try {

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    
//     app.on("error",(error)=>{
//         console.log("ERRR: ", error);
//         throw error       
//     })

//     app.listen(process.env.PORT,()=>{
           
//         console.log('App is listening on port $ {process.env.PORT}');

// })
    
// } catch (error) {
//     console.Console.log("ERROR: ", error)
//     throw err;
// }
// })()






















// app.get('/', (req, res) =>{
//       res.send('Hello World!');
// })


// app.get('/twitter', (req, res) => {
//     res.send('twitter.com');
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${port}`);
// })


