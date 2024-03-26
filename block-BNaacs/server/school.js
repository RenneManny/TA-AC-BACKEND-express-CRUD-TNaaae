const express = require('express');
const app = express();

// Setting up template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Serving static files from the 'views' directory
// app.use(express.static("views"));

// Making request
// using .get
app.get("/", (req, res) => {
    res.render("index.ejs", { schoolName: "DAV" });
});

app.listen(3000, () => {
    console.log("Listening at port 3000");
});
