const express = require('express');
const Search = require('../models/Search');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
var iconv = require('iconv-lite');
const jwt = require('jsonwebtoken');
const config = require('config');
const url = require('url');

// @route       POST /api/url
// @desc        搜索历史记录
// @access      Public

router.post('/', async (req, res) => {
  console.log(req.body);
  let { urlString } = req.body;
  console.log(req.body);
  if (!urlString.startsWith('http')) {
    urlString = 'https://' + urlString;
  }
  urlObj = url.parse(urlString);
  console.log(urlObj);
  try {
    response = await axios.get(urlString);
    const $ = cheerio.load(response.data);
    title = $('title').text();

    res.json({
      url: urlString,
      title: $('title').text(),
      desc: $('meta').text(),
      desc: $('meta[name=description]').attr('content'),
      icon_url: urlObj.protocol + '//' + urlObj.hostname + '/favicon.ico'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: '解析url，服务器错误', code: error });
  }
});

module.exports = router;
