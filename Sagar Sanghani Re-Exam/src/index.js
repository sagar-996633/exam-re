const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes/v1");
const config = require("./config/config");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,`./public`)));

app.use("/v1", routes);

/** enable cors */
app.use(cors());
app.options("*", cors());

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 8080!");
});

