import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("Eduverse is running perfect");
});

const PORT = process.env.PORT || 5005;

mongoose
  .connect("")
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
