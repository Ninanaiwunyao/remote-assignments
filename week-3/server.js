const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.get('/getData', (req, res) => {
    const number = parseInt(req.query.number);
    if (isNaN(number)) {
        res.status(400).json({ message: 'Bad Request: number query parameter is required and should be a valid number.' });
        return;
    }
    if (number <= 0 || !Number.isInteger(number)) {
        res.status(400).json({ message: 'Wrong Parameter' });
        return;
    } 
    const sum = (number * (number + 1)) / 2;
    res.json({ sum: sum });
});

app.get('/name', (req, res) => {
    const userName = req.cookies.userName;

    if (userName) {
        res.send(`Hello, ${userName}!`);
    } else {
        res.send(`
            <form action="/trackName" method="post">
                <label for="name">Please enter your name:</label>
                <input type="text" id="name" name="name" required></input>
                <button type="submit">Submit</button>
            </form>
        `);
    }
});

app.post('/trackName', (req, res) => {
    const userName = req.body.name;
    res.cookie('userName', userName, { maxAge: 900000 }); 
    res.redirect('/name');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
