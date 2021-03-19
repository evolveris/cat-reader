const express = require('express');
const cors = require('cors');
const csv = require('csvtojson');

const csvFilePath = './data/goodreads_export.csv';
let goodreadsExport;

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  goodreadsExport = jsonObj;
})

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json(goodreadsExport);
});

app.use((error, req, res, next) => {
  res.status(500);
  res.json({
    message: error.message
  });
});

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});