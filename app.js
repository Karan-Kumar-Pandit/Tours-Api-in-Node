const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// -------------------------------------------------------
// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTours);
// app.get("/api/v1/tours/:id", getTours);
// app.patch("/api/v1/tours/:id", updateTours);
// app.delete("/api/v1/tours/:id", deleteTours);

// Routs
app.use('/api/v1/tours', tourRouter);
// -----------------------------------------------

module.exports = app;
