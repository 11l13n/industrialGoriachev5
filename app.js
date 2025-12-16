const express = require('express');
const path = require('path');
const counterRoutes = require('./routes/counterRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/counter', counterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
