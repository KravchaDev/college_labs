const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const names = ["Джон", "Василий", "Иван", "Петр"];
    res.render('index', {users: names, value: 7});
})

app.listen(port, () => console.log(`Сервер поднят: http://localhost:${port}`));