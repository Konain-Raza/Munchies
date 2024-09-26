const express = require("express");
const cors = require("cors"); 
const Routes = require("./routes/munchies");
const app = express();
const PORT = process.env.PORT || "5000";

// Use CORS middleware to allow all origins
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🍔 Welcome to the Munchie API! 🎉 Where cravings go to find their happy place! Dive into a world of snacks that’ll make your taste buds do the happy dance. Whether you're a savory snacker or a sweet tooth, we’ve got you covered! 🍕🍩 Let’s get munching! 😋");

});

// Middleware for food-related routes
app.use("/", Routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
