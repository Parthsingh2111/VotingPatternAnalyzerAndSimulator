import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors(
    { 
    origin: process.env.CORS_ORIGIN,
   
     credentials: true

    }
 
));
//cors
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

//cookie parser
app.use(cookieParser())

export default app
// export{app}
// export const app = express();
