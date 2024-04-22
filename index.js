const express = require('express');
require('./database/database.js');
require('dotenv').config();
const {logReqRes} = require('./middleware/middle.js');
const MainRoute = require('./Routes/MainRoute.js');
const Users = require('./MOCK_DATA.json');

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware
app.use(logReqRes);

// Route
app.use('/api/users', MainRoute);


app.get('/users', (req, res) => {
    
const userListItems = Users.map((user) => `<li>${user.first_name} - ${user.last_name}</li>`);
const userList = `<ul>${userListItems.join('')}</ul>`;
res.send(userList);
});

const Port = process.env.PORT || 4000; 


app.listen(Port, () => console.log(`server running on port: ${Port}`));