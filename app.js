const express = require('express');
const app = express();

app.listen(3400, () => {
  console.log('connected 3400 port!!')
});

app.get('/', (req,res) => {
  res.send('<h1>Hello world!!</h1>')
})
