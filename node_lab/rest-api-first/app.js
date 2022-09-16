import express from 'express';

const app = express();
const port = 3000;

import * as stores from './main.js';

import bodyParser from "body-parser";

app.use(bodyParser.json());

function isAuthorized(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'secretpassword') {
        return next();
    }
    return res.status(401).send('Unauthorized');
}

app.get('/', (req, res) => {
    res.redirect("/posts");
});

app.get('/posts', (req, res) => {
    const posts = stores.getDataObject('posts');

    const page = +req.query.page;
    const pageSize = +req.query.pageSize;

    if (page && pageSize) {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        res.json(posts.slice(start, end));
    } else {
        res.json(posts);
    }
});

app.get('/posts/:id', (req, res) => {
    const postId = +req.params.id;
    if (postId) {
        const posts = stores.getDataObject('posts');
        const post = posts.find(p => p.id === +req.params.id);
        if (post) {
            return res.json(post);
        }
        return res.status(404).send('Not Found');
    }
    return res.status(400).send('Bad Request');
});

app.post('/posts', isAuthorized, (req, res) => {
    if (req.body.title && req.body.body) {
        let posts = stores.getDataObject('posts');
        const newPost = {
            id: posts.length + 1,
            title: req.body.title,
            body: req.body.body,
            userId: 1,
        }
        stores.rewriteDataObject('posts', [...posts, newPost]);
        return res.status(201).json(newPost);
    }
    return res.status(400).send('Bad Request');
});

app.put('/posts', isAuthorized, (req, res) => {
    if (req.body.id && req.body.title && req.body.body) {
        let posts = stores.getDataObject('posts');
        if (posts.find(p => p.id === +req.body.id)) {
            let updatedPost;
            posts = posts.map(p => {
                if (p.id === req.body.id) {
                    updatedPost = {...p, ...req.body};
                    return updatedPost;
                }
                return p;
            })
            stores.rewriteDataObject('posts', posts)
            return res.json(updatedPost);
        }
        return res.status(404).send('Not Found');
    }
    return res.status(400).send('Bad Request');
});

app.delete('/posts/:id', isAuthorized, (req, res) => {
    const postId = +req.params.id;
    if (postId) {
        let posts = stores.getDataObject('posts');
        const deletedPost = posts.find(p => p.id === +req.params.id);
        if (deletedPost) {
            posts = posts.filter(p => p.id !== +req.params.id);
            stores.rewriteDataObject('posts', posts);
            return res.status(410).json(deletedPost);
        }
        return res.status(404).send('Not Found');
    }
    return res.status(400).send('Bad Request');
});

app.listen(port, () => console.log(`REST API application http://localhost:${port}/`))
