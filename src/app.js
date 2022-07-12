const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// setup handlebars engine and views locations
app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Aikins Dwamena",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Aikins Dwamena",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Aikins Dwamena",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Please enter an address");
  }
  res.send({
    forecast: "forecast",
    location: "location",
    address: req.query.address,
  });
});

app.get("/help/*", (req, res) => {
  res.render("404page", {
    title: "The article not found",
    message: "The article not found",
    name: "Aikins Dwamena",
  });
});

app.get("*", (req, res) => {
  res.render("404page", {
    title: "Page not found",
    message: "Page not found",
    name: "Aikins Dwamena",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
