const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./schoolController');

const app = express();
const PORT = 8000;


app.use(bodyParser.json());

app.use('/api', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
