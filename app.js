const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render('index',{
    titulo : "titulo",
    descripcion: "descripcion"
  });
});
app.get("/servicios", (req, res) => {
  res.render('servicios',{titulo : "servicios"});
});

app.use((req, res,next) => {
  res.render('404');
});
app.use(express.static(__dirname +'/public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});