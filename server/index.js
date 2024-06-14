const express = require("express");
const app = express();
const PORT = 3001;
const db = require('./models');

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
