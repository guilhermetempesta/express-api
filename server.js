require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 4000;

const routes = require('./routes');
routes(app);

app.disable('x-powered-by');

app.listen(port, () => { 
    console.log(`Server is running in port ${port}`)
});