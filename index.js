const express = require("express");

const app = express();

app.use((req, res) => res.end("Hello express!"));

app.listen(3000, () => console.log("Listening on port 3000!"));
