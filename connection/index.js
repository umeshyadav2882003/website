let
express = require("express")


 


let
app = express()


 


app.listen(3000,
()=>{


 
  console.log("server
is connected...")


})


 


let
connectdb = require("./connection/connectdb.js")


connectdb()


 


//
let saveDoc = require("./model/model.js")


//
saveDoc()


 


//
let saveMultipleDoc = require("./model/model.js")


//
saveMultipleDoc()


 


//
let readData = require("./model/model.js")


//
readData()


 


//
let updateData = require("./model/model.js")


//
updateData(1)


 


let
deleteData = require("./model/model.js")


deleteData(1)





 


