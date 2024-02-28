require('dotenv').config();// dotenv is a dependency used to access the .env outside the git ignore file then configuration is done

const express = require('express') //express is just like maven in java
const app = express();

const dbUrl = process.env.MONGO_URI

const ConnectDB = require('./features/db/connectDB')
const port = 3000;

const router = require('./features/router/router');
const NotFound = require('./features/middleware/NotFound');

app.use(express.json())
app.use('/api/user', router);
app.use(NotFound)

ConnectDB(dbUrl).then(()=>{
    app.listen(port, ()=>{
        console.log(`app listening at port ${port}`)
    })
}).catch((error) =>{
    console.log(error)
})