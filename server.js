const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// CONNECT TO MONGODB
// ---------------------------------------
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connect to MongoDB Successfully!..');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
// ----------------------------------------

// Start Server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
