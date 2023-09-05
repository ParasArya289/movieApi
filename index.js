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

//Global Error Handler
app.use((err,_,__,___)=>{
  console.error(err.stack);
  res.status(500).json({error:"Something Went Wrong"})
})

//Global Route Middleware
app.use((_,res)=>{
  res.status(404).json({error:"Requested API route does not exist"})
})

app.listen(3000, () => {
  console.log('server started');
});
