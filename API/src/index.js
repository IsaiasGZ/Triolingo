const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); //Para crear variables de ambiente
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors()); 
app.use(express.json()); //Se transforman los datos para poder agregar a la bd
app.use('/api', userRoutes);


//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});


//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB ATLAS'))
.catch((error) => console.error(error));


app.listen(9000, () => console.log('Server listening on port', port));



