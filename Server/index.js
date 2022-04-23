const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const mentorRoute = require('./routes/mentor');
const courseRoute = require('./routes/course');
const userRoute = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');
const contactRoute = require('./routes/contact');

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB'.green, url.yellow);
  })
  .catch((err) => {
    console.log('Error'.red, err);
  });

// pre middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', userRoute);
app.use('/mentors', mentorRoute);
app.use('/courses', courseRoute);
app.use('/contact', contactRoute);

//post middlewares
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on Port ${port}`));
