module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/signup", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/getall", tutorials.findAll);
  
   
  
    app.use('/api/tutorials', router);
  };