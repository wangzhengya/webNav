const express = require('express');
const Search = require('../models/Search');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

// @route       POST /api/search
// @desc        搜索历史记录
// @access      Public

router.post('/', async (req, res) => {
  const { text } = req.body;

  const token = req.header('x-auth-token');
  let name = '匿名';
  //Check if not token
  if (token) {
    try {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      name = decoded.user.id;
    } catch (err) {
      name = '匿名';
    }
  }

  try {
    const newSearch = new Search({
      text,
      user: name
    });

    const search = await newSearch.save();
    res.json(search);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: '增加新的搜索时，服务器错误' });
  }
});

module.exports = router;
