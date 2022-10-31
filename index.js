
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const Route = require("./Route/router");
app.use(Route);

app.listen(port , () => {
  console.log("Server 3000 is Running");
});
