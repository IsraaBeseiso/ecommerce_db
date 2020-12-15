const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
try{
  const categoryData = await Category.findAll();
  include: [product]
  if (categoryData) {
  res.status(404).json({ message: 'no product found with this id!' });
  }
 res.status(200).json(CategoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findById(req.params.id, {
    include:[ products]
    });

    if (categoryData) {
      res.status(404).json({ message: no products found with this id! });
      return;
    }
    res.status(200).json(categoryData);
    catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.creat(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.delete({
   where: {
     id:req.pqrqms.id
   }
});
if (!categoryData) {
  res.status(404).json({ message: 'No category found with this id!' });
  return;
}

res.status(200).json(CategoryData);
} catch (err) {
res.status(500).json(err);
}
});

module.exports = router;
