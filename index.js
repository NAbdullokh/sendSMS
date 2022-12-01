const twilio = require("twilio");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var client = new twilio(
    "AC583895562d1da5ac388a913562f6cc97",
    "5a4cc4c0232dbc64b17a0401cc3449a9"
  );

  client.messages.create({
    to: "+998981153747",
    from: "+19474652666",
    body: "Mahmuda qalesan",
  });
  res.send("Sms sent!");
});

//console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1&newCustomer=true
https: app.listen(port, () => {
  console.log("app listening on port", port);
});

// const twilio = require("twilio");
// var client = twilio(
//   "AC583895562d1da5ac388a913562f6cc97",
//   "5a4cc4c0232dbc64b17a0401cc3449a9"
// );

// client.messages.create({
//   to: "+998981153747",
//   from: "+19474652666",
//   body: "xasanboy",
// });
