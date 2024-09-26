const { google } = require("googleapis");

const keys =JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);

// Constants
const SPREADSHEET_ID = "1df4zjXi-rZz3r5_6ZJkbSdusyV3ZdUfeeJu-StNMT5s";

// Authenticate and return the client for our database
const authenticateDatabase = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: keys,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return await auth.getClient();
};

// Fetch munchies data from our database
const fetchMunchiesFromDatabase = async () => {
  const client = await authenticateDatabase();
  const sheets = google.sheets({ version: "v4" });

  const response = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1",
  });

  return response.data.values.map((item) => ({
    name: item[0],
    description: item[1],
    price: item[2],
    category: item[3],
    imageUrl: item[4],
  }));
};

// Get all munchies
const fetchMunchies = async (req, res) => {
  try {
    const munchies = await fetchMunchiesFromDatabase();
    console.log("🍽️ Munchies successfully fetched from our database!");
    res.status(200).json(munchies);
  } catch (error) {
    console.error("🚨 Error fetching munchies:", error.message);
    res.status(500).json({ error: "Failed to fetch munchies data from our database." });
  }
};

// Get munchies by category
const fetchMunchiesByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    const munchies = await fetchMunchiesFromDatabase();
    const filteredItems = munchies.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredItems.length === 0) {
      console.warn("⚠️ No munchies found for the category:", category);
      return res.status(404).json({ message: "🚨 No items found for this category." });
    }

    console.log("📦 Munchies filtered by category:", category);
    res.status(200).json(filteredItems);
  } catch (error) {
    console.error("🚨 Error fetching munchies by category:", error.message);
    res.status(500).json({ error: "Failed to fetch data from our database." });
  }
};

// Add new munchie to the database
const addMunchie = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  // Validate input
  if (!name || !description || !price || !category || !imageUrl) {
    console.error("🚨 Error: Missing required fields.");
    return res.status(400).json({
      error: "All fields are required: name, description, price, category, and imageUrl.",
    });
  }

  // Validate price is a number
  if (isNaN(price)) {
    console.error("🚨 Error: Price must be a valid number.");
    return res.status(400).json({
      error: "Price must be a valid number.",
    });
  }

  try {
    const client = await authenticateDatabase();
    const sheets = google.sheets({ version: "v4" });

    await sheets.spreadsheets.values.append({
      auth: client,
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "RAW",
      resource: {
        values: [[name, description, price, category, imageUrl]],
      },
    });

    console.log("✅ Munchie added successfully!");
    res.status(201).json({ message: "Munchie added successfully!" });
  } catch (error) {
    console.error("🚨 Error adding munchie:", error.message);
    res.status(500).json({ error: "Failed to add munchie to our database." });
  }
};

module.exports = { fetchMunchies, fetchMunchiesByCategory, addMunchie };
