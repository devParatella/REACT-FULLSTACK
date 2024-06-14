const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./models");

app.use(express.json());

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
