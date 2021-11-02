const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });

const app = express();
app.use(cors);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get("/", (req, res) => {
    res.send("Hello from Firebase!");
});

app.get("/cities", (req, res) => {
  res.json([
    'Melbourne',
    'Sydney',
    'Perth'
  ]);
});

app.get("/hotels", (req, res) => {
  res.json([
    {
      name: "Crowne Plaza Melbourne",
      city: "Melbourne",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/278629182.webp?k=0493a24710d6cc489933dfcaf82d6d246a365abc29b4f76f86b37f9086058cec&o=&s=1",
    },
    {
      name: "Oaks Melbourne",
      city: "Melbourne",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/239898700.webp?k=f89da21cd74b02e479b48e7f9757c640728e4c5a1eff74c534300b9ba5cfd8da&o=&s=1",
    },
    {
      name: "Radisson On Flagstaff Gardens Melbourne",
      city: "Melbourne",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/267803149.webp?k=1763d277fab1092d72b03bdae1f85117f795107dab10c83684b9ab71d52c0933&o=&s=1",
    },
  ]);
});

exports.app = functions.https.onRequest(app);
