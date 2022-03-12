import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello Word!" });
});

app.listen(PORT, () => console.log(`Listing on port ${PORT}`));
