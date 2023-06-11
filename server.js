const express = require("express");
const apiRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
