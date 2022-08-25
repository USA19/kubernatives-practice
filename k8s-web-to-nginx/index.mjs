import express from "express";
import os from "os";
import fetch from "node-fetch";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()}`)
});

app.get("/nginx", async (req, res) => {
  const response = await (await fetch("http://nginx")).text()
  res.send(response)
});

app.listen(3000, () => {
  console.log("Listening >>>>>>>>>")
})