const bodyparser = require("body-parser");
const express = require("express");
const app = express();

const port = 3010;

const sendEmail = require("./phpmailer");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/sendEmail", async (req, res) => {
  await sendEmail(req.body)
    .then(() => res.send({ msg: "Email został wysłany." }))
    .catch(() =>
      res.send({
        error: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później."
      })
    );
});

app.listen(port, () => {
  console.log("Start server ...");
});
