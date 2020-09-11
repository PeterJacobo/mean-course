const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

//lLfEXRTgbT8nX3GR
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'f32a23ff3',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '9132rh7r12',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '23ta03t23a',
      title: 'Third server-side post',
      content: 'This is coming from the server'
    },
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
