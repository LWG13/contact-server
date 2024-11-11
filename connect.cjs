
const mongoose = require("mongoose");


const connect = () => {
  mongoose.connect("mongodb+srv://Lwg13:lwgdatabase@cluster0.ykph6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "Contact"
  })
}
module.exports = connect;