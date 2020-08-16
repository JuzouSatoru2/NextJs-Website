const express = require('express');
const Article = require('../models/articles');
const router = express.Router();
const auth = require('../lib/auth');

router.get('/', async (req, res) => {
  const article = await Article.find().sort({
    createdAt: 'desc',
  });
  res.json(article);
});

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article === null) {
    res.status(404);
  }
  res.json(article);
});

router.post('/', auth, (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;
  try {
    article = article.save();
    res.json('Posted article');
  } catch (e) {
    res.json('Failed posting article');
  }
});

router.put('/:id', auth, async (req, res) => {
  let article = await Article.findById(req.params.id);
  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;
  try {
    article = article.save();
    res.json('Put article');
  } catch (e) {
    res.json('Failed putting article');
  }
});

router.patch('/:id', auth, async (req, res) => {
  let article = await Article.findById(req.params.id);
  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;
  try {
    article = article.save();
    res.json('Patched article');
  } catch (e) {
    res.json('Failed patching article');
  }
});

router.delete('/:id', auth, async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json('Deleted article');
});

module.exports = router;
