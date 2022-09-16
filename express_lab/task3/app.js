import * as dotenv from 'dotenv'

dotenv.config()

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import morgan from 'morgan';
import {Contact} from "./models/contact.js";

const app = express();

app.use(morgan('dev'))

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.render('index');
})

app.get('/index', (req, res) => {
    return res.render('index');
})

app.get('/contact', (req, res) => {
    return res.render('contact');
})

app.get('/list', (req, res) => {
    Contact
        .find()
        .then(r => {
            console.log(r)
            res.render('list', {contacts: Object.values(r)})
        })
        .catch((e) => console.log(e))
})

// Проверка на получение данных из post-запроса
app.post('/index', urlencodedParser, (req, res) => {
    // Если данные не получены, то ошибка
    if (!req.body) return res.sendStatus(400);
    // Если все поля не пустые, то показываем успешную страницу
    if (req.body.name !== '' && req.body.email !== '' && req.body.mes !== '' && req.body.anon !== '') {
        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            mes: req.body.mes,
            anon: req.body.anon,
        });
        contact.save(function (err) {
            //
        });
        // Отображение успешной страницы
        return res.render('index', {data: req.body, success: true});
    }
    // Отображение той же страницы, что и ранее
    return res.render('index', {data: req.body});
})

mongoose
    .connect(process.env.DB_HOST)
    .then(() =>
        app.listen(
process.env.SERVER_PORT,
            () =>console.log(`Server is running http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)),
    )
    .catch((error) =>console.log(`${error} did not connect`));

    
