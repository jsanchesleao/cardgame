const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.send(
    {status: 'ok'}
  )
});

app.listen('3000', () => {
  console.log('API started at 0.0.0.0:3000');
})