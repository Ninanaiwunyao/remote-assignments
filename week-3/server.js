const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index', {message: 'Hello, My Server!'})
})

app.get('/getData',(req, res) => {
    const number = parseInt(req.query.number);
    const sum = (number * (number + 1)) / 2;
    res.send(sum.toString());
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

