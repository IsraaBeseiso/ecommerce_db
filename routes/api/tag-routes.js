const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagsData = await Tag.findAll(
      {
        include: [
          {
            model: Product,
            attributes: ['product_name']
          },
          {
            model: ProductTag,
            attributes: ['product_tag']
          }
        ]
      }
    )

    if (!tagData) {
      res.status(404).json({ message: 'No tag data found!' });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findById(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['product_name']
        },
        {
          model: ProductTag,
          attributes: ['product_tag']
        }
      ]
    });

    if (!tagData) {
      res.status(404).json({ message: 'no tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);

    if (!tagData) {
      res.status(500).json({ message: 'Unable to create the tag!'});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, { where: { id: req.params.id } });

    if (!tagData) {
      res.status(404).json({ message: 'Unable to find category to update!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.delete({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
