require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routesUser = require('./route/usersRoutes');
const routesCollaborators = require('./route/collaboratorsRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routesUser);
app.use('/team', routesCollaborators);

app.listen(3030, () => {
    console.log('Local server runnig at port 3030');
})