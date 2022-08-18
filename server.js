
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
//app.use('/users', require('./users/users.controller'));
app.use("/signups", require("./routes/signupRoutes"));

app.use((err, req, res, next) => {
  donsole.log(err.stack);
  donsole.log(err.name);
  donsole.log(err.code);

  res.status(500).json({
    message: "there is an error.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
