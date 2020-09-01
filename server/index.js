const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const jobs = [
  { id: 1, description: "job 1", userId: 1, applied: true },
  { id: 2, description: "job 2", userId: 1 },
  { id: 3, description: "job 3", userId: 2 },
  { id: 4, description: "job 4" }
];

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/api/jobs", (req, res) => {
  const job = { id: Date.now(), applied: false, ...req.body };
  jobs.push(job);
  res.json(job);
});

app.patch("/api/jobs/:id", (req, res) => {
  const index = jobs.findIndex(job => job.id === parseInt(req.params.id));
  const job = jobs[index];
  if ("applied" in req.body) job.applied = req.body.applied;
  if ("userId" in req.body) job.userId = req.body.userId;

  res.json(job);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
