// entry point of the project 

const express = require('express');
const connectDB = require('./server/config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
const apiRoutes = require('./server/api').router;
app.use('/', apiRoutes);

app.get('/', (req, res) => res.send('node server running'));


// connect to db
connectDB();
// mongoose.connect(process.env.DB_CONNECTION + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(error => console.error('Could not connect to MongoDB...', error))


// start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
