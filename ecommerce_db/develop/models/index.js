// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreinKey: 'catergory_id'
});
// Categories have many Products
Product.hasMany(product, {
  foreinKey: 'catergory_id',
  onDelete: 'NULL'
});
// Products belongToMany Tags (through ProductTag)
products.belongToMany(tag, {
  through: 'productTag',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
tag.belongToMany(product, {
  through: 'productTag',
  forignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
