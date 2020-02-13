const express = require('express');
const recipeRoutes = require('./recipes/recipe-router.js');

const server = express();
const port = 5009;

server.use(express.json());
server.use('/api', recipeRoutes);

server.listen(port, () => console.log(`Server listening on port ${port}`));
