const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Category = require('../models/Category');

// @route       GET api/categories
// @desc        获取所有该用户的种类
// @access      私有
router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id }).sort({
      weight: -1
    });
    res.json(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: '获取用户所有类别时，服务器错误' });
  }
});

// @route       POST api/categories
// @desc        增加一个新的种类
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('name', '必需填写名字')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, weight } = req.body;
    try {
      const newCategory = new Category({
        name,
        weight,
        user: req.user.id
      });

      const category = await newCategory.save();
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: '增加新的类别时，服务器错误' });
    }
  }
);

// @route     PUT api/categories/:id
// @desc      Update category
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, weight } = req.body;

  // Build category object
  const categoryFields = {};
  if (name) categoryFields.name = name;
  if (weight) categoryFields.weight = weight;

  try {
    let category = await Category.findById(req.params.id);

    if (!category) return res.status(404).json({ msg: '未发现该类别' });

    // Make sure user owns category
    if (category.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '该类别不属于你' });
    }

    category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: categoryFields },
      { new: true }
    );

    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: '服务器错误' });
  }
});

// @route     DELETE api/categories/:id
// @desc      删除类别
// @access    私有
router.delete('/:id', auth, async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) return res.status(404).json({ msg: '未发现该类别' });

    // Make sure user owns category
    if (category.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '该类别不属于你' });
    }

    await Category.findByIdAndRemove(req.params.id);

    res.json({ msg: '该类别已经删除' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
