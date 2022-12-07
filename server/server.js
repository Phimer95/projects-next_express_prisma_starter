const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    allowedHeaders: "*",
    exposedHeaders: "*",
  })
);

app.use(express.json());

// Routes go here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;
const server = require("http").createServer(app);
server.listen(port, () => {
  console.log("app running on port: " + port);
});
