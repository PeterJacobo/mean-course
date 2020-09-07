const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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