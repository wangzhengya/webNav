const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Link = require('../models/Link');
const Category = require('../models/Category');

// @route       GET api/links
// @desc        获取所有该用户的link
// @access      私有
router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id });
    res.json(links);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: '获取用户所有连接时，服务器错误' });
  }
});

// @route       GET api/links/all
// @desc        获取所有该用户的link,按照种类分类
// @access      私有
router.get('/all', auth, async (req, res) => {
  try {
    let linkGroups = [];
    const links = await Link.find({ user: req.user.id });
    const categories = await Category.find({ user: req.user.id });
    if (categories) {
      categories.forEach((category, i) => {
        let linkgroup = {};
        linkgroup.category = category;
        linkgroup.links = links.filter(link => link.category == category.name);
        // links.forEach((link, j) => {
        //   if (link.category !== '' && link.category === category.name) {
        //     linkgroup.links.push(link);
        //     console.log(link);
        //   }
        // });
        linkGroups.push(linkgroup);
      });
    }
    res.json(linkGroups);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: '获取用户所有连接时，服务器错误' });
  }
});

// @route       GET api/links/:id
// @desc        获取所有该用户的link
// @access      私有
router.get('/:id', auth, async (req, res) => {
  try {
    let link = await Link.findById(req.params.id);
    // Build link object
    const linkFields = {};
    linkFields.views = Number(link.views) + 1;
    if (!link) return res.status(404).json({ msg: '未发现该连接' });

    // Make sure user owns link
    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '该连接不属于你' });
    }

    link = await Link.findByIdAndUpdate(
      req.params.id,
      { $set: linkFields },
      { new: true }
    );

    res.json(link);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: '服务器错误' });
  }
});

// @route       POST api/links
// @desc        增加一个新的种类
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('title', '必需填写名字')
        .not()
        .isEmpty(),
      check('url', '必需填写url')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      desc,
      url,
      icon_url,
      views,
      type,
      style,
      category
    } = req.body;
    try {
      const newLink = new Link({
        title,
        desc,
        url,
        icon_url,
        views,
        type,
        style,
        category,
        user: req.user.id
      });

      const link = await newLink.save();
      res.json(link);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: '增加新的连接时，服务器错误' });
    }
  }
);

// @route     PUT api/links/:id
// @desc      Update link
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { title, desc, url, icon_url, views, type, style, category } = req.body;

  // Build link object
  const linkFields = {};
  if (title) linkFields.title = title;
  if (desc) linkFields.desc = desc;
  if (url) linkFields.url = url;
  if (icon_url) linkFields.icon_url = icon_url;
  if (views) linkFields.views = views;
  if (type) linkFields.type = type;
  if (style) linkFields.style = title;
  if (category) linkFields.category = category;

  try {
    let link = await Link.findById(req.params.id);

    if (!link) return res.status(404).json({ msg: '未发现该连接' });

    // Make sure user owns link
    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '该连接不属于你' });
    }

    link = await Link.findByIdAndUpdate(
      req.params.id,
      { $set: linkFields },
      { new: true }
    );

    res.json(link);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: '服务器错误' });
  }
});

// @route     DELETE api/links/:id
// @desc      删除连接
// @access    私有
router.delete('/:id', auth, async (req, res) => {
  try {
    let link = await Link.findById(req.params.id);

    if (!link) return res.status(404).json({ msg: '未发现该连接' });

    // Make sure user owns link
    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '该连接不属于你' });
    }

    await Link.findByIdAndRemove(req.params.id);

    res.json({ msg: '该连接已经删除' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
