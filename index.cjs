const express = require('express');

const cors = require("cors");
const connect = require("./connect.cjs")
const contactData = require("./model.cjs")
var cron = require('node-cron');
const app = express();
connect()
app.use(cors());
app.use(express.json());
app.post("/", async (req,res) => {
  let data = new contactData(req.body)
  let result = await data.save();
  res.send(result)
});
app.listen(6565, () => {
  console.log("Server Running")
})


cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

