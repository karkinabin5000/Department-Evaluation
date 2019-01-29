const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const evaluationData = require('./routes/api/data');
//const userAuthentication = require('./routes/api/users');


const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    //app.use('/api/users', userAuthentication);

    app.use('/api/data', evaluationData);


    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log('Server started on port '+port));



