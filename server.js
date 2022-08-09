//jshint exversion:6
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('build'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
