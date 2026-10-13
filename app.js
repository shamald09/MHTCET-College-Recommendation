require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const requiredDbVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"];
const missingDbVars = requiredDbVars.filter((key) => !process.env[key]);

let conn = null;
if (missingDbVars.length === 0) {
  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 4000,
    ssl: process.env.DB_SSL === "false" ? undefined : { rejectUnauthorized: true },
  });

  conn.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      return;
    }
    console.log("Connected to the database.");
  });
} else {
  console.warn(
    `Database is not configured. Add these variables to .env: ${missingDbVars.join(", ")}`
  );
}

app.get("/", (req, res) => res.render("home.ejs"));
app.get("/streams", (req, res) => res.render("streams.ejs"));
app.get("/find", (req, res) => res.render("find.ejs"));
app.get("/contact", (req, res) => res.render("contact.ejs"));

app.post("/find", (req, res) => {
  if (!conn) {
    return res.status(503).send(
      "Database is not configured. Create a local .env file using .env.example and add your database credentials."
    );
  }

  const location = String(req.body.location || "").trim();
  const percentile = Number(req.body.percentile);

  if (!location || !Number.isFinite(percentile) || percentile < 0 || percentile > 100) {
    return res.status(400).send("Please enter a location and a percentile between 0 and 100.");
  }

  const minCutoff = percentile - 3;
  const maxCutoff = percentile + 3;
  const query = "SELECT * FROM colleges WHERE Location = ? AND cutoff BETWEEN ? AND ?";

  conn.query(query, [location, minCutoff, maxCutoff], (err, results) => {
    if (err) {
      console.error("College search failed:", err.message);
      return res.status(500).send("Could not search colleges. Check the database configuration and table columns.");
    }
    if (results.length === 0) {
      return res.render("result.ejs", {
        colleges: null,
        message: "No colleges found matching your criteria.",
      });
    }
    return res.render("result.ejs", { colleges: results, message: null });
  });
});

app.get("/show/:code", (req, res) => {
  if (!conn) {
    return res.status(503).send("Database is not configured. Set up your .env file first.");
  }

  const query = "SELECT * FROM colleges WHERE `Institute Code` = ?";
  conn.query(query, [req.params.code], (err, results) => {
    if (err) {
      console.error("College details query failed:", err.message);
      return res.status(500).send("Could not load college details.");
    }
    return res.render("show.ejs", { collegeData: results });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
