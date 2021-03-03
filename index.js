const path = require('path');

const express = require('express')

const app = express();

const connectionRoutes = require('./routes/connection')

app.use(express.static(path.join(__dirname, 'public')));
app.use(connectionRoutes);

app.listen(4000);