const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const accidentRoutes = require('./routes/accidentRoutes');

dotenv.config();
const app = express();

const corsOptions = {
    origin: process.env.CLIENT_PORT_LOCAL,   
    credentials: true, 
  };

  app.use(cors(corsOptions));   
     
app.use(express.json());
app.use('/api/accident', accidentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
