const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product
      }]
    });
    if(!categories) {
      res.status(404).json({message: `Data not found.`});
      return;
    };
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product
      }]
    });
    if(!catData) {
      res.status(404).json({message: `Category data not found.`});
      return;
    }
    res.status(200).json(catData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const update = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    });
    if (!update) {
      res.status(404).json({message: `Could not find category with this ID.`});
      return;
    }
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const target = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!target) {
      res.status(404).json({message: `Could not find category with this ID.`});
      return;
    }
    res.status(200).json(target);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
