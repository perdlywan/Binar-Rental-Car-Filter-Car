const express = require("express");
const app = express();
const PORT = 5200;
const path = require("path");
const PATH_DIR = __dirname;

app.use(express.static("public"));

app.get("/cars", (req, res) => {
  res.sendFile(path.join(PATH_DIR + "../../public/cariMobil.html"));
});

app.listen(PORT, () =>
  console.log("Server sudah berjalan di localhost:%d", PORT)
);
