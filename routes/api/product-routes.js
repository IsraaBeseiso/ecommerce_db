const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      },
    ]
  })
  .then((products)=> res.json(products))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // find all products
  // be sure to include its associated Category and Tag data
  // try {
  //   const productsData = await Product.findAll(
  //     {
  //       include: [
  //         {
  //           model: Category,
  //           attributes: ['category_name']
  //         },
  //         {
  //           model: Tag,
  //           attributes: ['tag_name']
  //         },
  //         {
  //           model: ProductTag,
  //           attributes: ['product_id']
  //         }
  //       ]
  //     }
  //   );

  //   if (productsData) {
  //     res.status(200).json(productsData);
  //   } else {
  //     res.status(404).json({ message: 'Products not found!'})
  //   }
  // } 
 
});
  
// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data

  try {
    const productData = await Product.findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: Category,
          attributes: ['category_name']
        },
        {
          model: Tag,
          attributes: ['tag_name']
        }
        ]
      });

      if (productData) {
        res.status(200).json(productData);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);

  } catch (err) {
    res.status(500).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Unable to find product to update.' })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value

  try {
    await Product.delete({
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
