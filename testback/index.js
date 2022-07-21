const express = require("express");

const app =express();

const PORT=8000;

app.use("/",(req,res)=>res.send("Home Route"));
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});