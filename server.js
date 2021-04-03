const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})
.then(() => console.log('connected'))
.catch(err => console.log(`db error ${err}`));

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

// routes
readdirSync('./routes').map(file => app.use('/api', require(`./routes/${file}`)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));