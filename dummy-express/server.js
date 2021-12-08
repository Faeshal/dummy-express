const express = require("express");
const app = express();
const PORT = 3000;

// Body Parser
app.use(express.json());

// * routing
app.get("/", (req, res, next) => {
  res.json({ success: true, message: "welcome to express" });
});

app.get("/api/v1/users", (req, res, next) => {
  res.json({ success: true, message: "user endpoint", data: [] });
});

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
