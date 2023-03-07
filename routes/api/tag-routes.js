const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{
        model: Product
      }]
    });
    if (!tags) {
      res.status(404).json({message: 'Data not found.'});
      return;
    };
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product
      }]
    });
    if (!tag) {
      res.status(404).json({message: 'Tag not found.'});
      return;
    };
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updated = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    });
    if (!updated) {
      res.status(404).json({message: 'Tag not found.'});
      return;
    };
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const toDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!toDelete) {
      res.status(404).json('Tag not found.');
      return;
    };
    res.status(200).json(toDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
