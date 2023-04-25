const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from API",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
