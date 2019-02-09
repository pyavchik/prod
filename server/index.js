const express = require('express');
const passportConfig = require('./services/passport');


const app = express();

const authRoutes = require('./routes/authRoutes')(app);

const PORT  = process.env.PORT || 5000;
app.listen(PORT);
