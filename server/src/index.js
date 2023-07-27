const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use(router);
app.use(require('./middleware/IsLoggedIn'));


// app.get('/todos', (req, res) => {
//     //console.log("hello world")
//     res.send('hello');
// })

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(8080);
    console.log("listening on port 8080");
}
)
