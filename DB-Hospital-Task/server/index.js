// Core Imports
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const bodyParser=require('body-parser')



const app = express();

dotenv.config();

const dbService = require("./dbService");

app.use(express.json({limit: '10000mb'}));
app.use(cors());










app.post("/emptyforloop", async (req,res)=>{

  const db = dbService.getDbServiceInstance();

  let users = false;

  users = await db.forloop();

  if (users) {

      

    res.status(200).json({
      message: "insertion succssful",
      status: "SUCCESS",

    });

  } else {

    return res.status(404).json({
      status: "FAILURE",
      message: "user not found",
    });

  }
    


})

app.post("/newloop", async (req,res)=>{


  var data=req.body
  const db = dbService.getDbServiceInstance();

  let users = false;

  users = await db.newloop(data);

  if (users) {

      

    res.status(200).json({
      message: "insertion succssful",
      status: "SUCCESS",

    });

  } else {

    return res.status(404).json({
      status: "FAILURE",
      message: "user not found",
    });

  }
    


})








app.post("/insert/recorddata", async (req, res) => {

  

  // const {id,name}=req.body;

  var data = req.body;
  const db = dbService.getDbServiceInstance();

  let users = false;
  try {
    users = await db.insertData(data);
    
    if (users) {

      

      res.status(200).json({
        message: "insertion succssful",
        status: "SUCCESS",
  
      });
  
    } else {
  
      return res.status(404).json({
        status: "FAILURE",
        message: "user not found",
      });
  
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }

  

 


});
app.post("/insert/billdata", async (req, res) => {

  

  // const {id,name}=req.body;

  var data = req.body;
  const db = dbService.getDbServiceInstance();

  let users = false;
  try {
    users = await db.insertBillData(data);
    
    if (users) {

      

      res.status(200).json({
        message: "insertion succssful",
        status: "SUCCESS",
  
      });
  
    } else {
  
      return res.status(404).json({
        status: "FAILURE",
        message: "user not found",
      });
  
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }

  

 


});


app.get("/getallRecords", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.getAllData();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})



app.get("/query1", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.queryFirst();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})

app.get("/query2", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.querySecond();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})

app.get("/query3", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.queryThird();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})

app.get("/query4", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.queryFourth();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})

app.get("/query5", async (req, res) => {

  const db = dbService.getDbServiceInstance();



  var data = await db.queryFifth();

  

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      status: "FAILURE",
      message: "data not found",
    });

  }

})








app.listen(5000, () => {
  console.log("Running on port 5000");
});
