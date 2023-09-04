require("./db");
const express = require('express');

const moviesRouter = require("./Routers/movies.router.js")
const {loggerMiddleWare} = require("./Middleware/middleware")

//Initialize app

const app = express();
app.use(express.json());

app.use(loggerMiddleWare)
app.use("/movies", moviesRouter);

app.get('/', (_, res) => {
  res.send('Movie Api')
});

app.listen(3000, () => {
  console.log('server started');
});
