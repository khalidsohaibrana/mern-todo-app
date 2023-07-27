const express = require('express');
const IsLoggedIn = require('./middleware/IsLoggedIn');
const LoginRoute = require('./routes/LoginRoute');
const ReadTodosRoute = require('./routes/ReadTodosRoute');
const CreateTodosRoute = require('./routes/CreateTodosRoute');
const UpdateTodosRoute = require('./routes/UpdateTodoRoute');
const DeleteTodoRoute = require('./routes/DeleteTodoRoute');
const app = express();

const router= express.Router();

router.post('/login', LoginRoute);

router.get('/todos', IsLoggedIn, ReadTodosRoute);

router.post('/todos', IsLoggedIn, CreateTodosRoute);

router.put('/todos/:id', IsLoggedIn, UpdateTodosRoute);

router.delete('/todos/:id', IsLoggedIn, DeleteTodoRoute);


module.exports = router;