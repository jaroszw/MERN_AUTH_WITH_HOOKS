const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const port = process.env.PORT || 5000;
const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log(`db is successful`);
  });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
