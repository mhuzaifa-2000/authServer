const express = require("express");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const getUserRouter = require("./routes/get");

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/login", loginRouter);

app.use("/register", registerRouter);
app.use("/get", getUserRouter);
app.listen(PORT, () => {
  console.log("Server Running on Port", PORT);
});
