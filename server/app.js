const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(
  morgan('      :method :url :status :res[content-length] - :response-time ms')
);

app.use(express.json());

const server = app.listen(port, () => {
  console.log(`✅ ${port} server is ok`);
});

module.exports = server;
