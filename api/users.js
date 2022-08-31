const express = require("express");
const router = express.Router();

//End point "/" nya adalah /api/users
router.get("/", async(req, res, next)=>{ 
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly",
  });
});

router.get("/:id", async(req, res, next)=>{
  try {
    
  } catch (error) {
    
  }
});

module.exports = router;