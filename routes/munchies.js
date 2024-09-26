// routes/products.js
const express = require("express");
const {
  fetchMunchies,
  fetchMunchiesByCategory,
  addMunchie,
  fetchMunchiesCategories,
} = require("../controllers/munchies"); //import all funcitons from controller
const router = express.Router();

router.get("/munchies", fetchMunchies); // get method to fetch all munchies
router.get("/munchies/categories", fetchMunchiesCategories); // get method to fetch all munchies

router.get("/munchies/category/:category", fetchMunchiesByCategory); //get method to fetch munchies by category
router.post("/addmunchie", addMunchie); // post method to add a munchie

module.exports = router; // export router to get access from app js
