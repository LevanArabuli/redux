const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const reports = [
  {
    id: 111,
    name: 'Report 1'
  },
  {
    id: 112,
    name: 'Report 2'
  },
  {
    id: 113,
    name: 'Report 3'
  },
  {
    id: 114,
    name: 'Report 4'
  },
  {
    id: 115,
    name: 'Report 5'
  }
];

app.use(function(req, res, next) {
  setTimeout(next, 2000);
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/api/reports', (req, res) => {
  res.send({ reports });
});

app.delete('/api/reports/:id', (req, res) => {
  const { id } = req.params;

  if (id) {
    const index = reports.indexOf(r => r.id === id);
    if (index) {
      reports.splice(index, 1);
    }
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
