const express = require("express");
const app = express();
const port = 3001;

app.get("/mock", (req, res) => {
  const leadingZero = req.query.leading === "1" ? true : false;
  const isJson = req.query.json === "1" ? true : false;

  if (isJson) {
    if (leadingZero) {
      return res.json({ value: "01" });
    } else {
      return res.json({ value: "11" });
    }
  }

  if (leadingZero) {
    return res.send("01");
  } else {
    return res.send("11");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
