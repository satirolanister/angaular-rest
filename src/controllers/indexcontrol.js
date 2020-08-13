const indexctrl = {};

const product = require('../models/product');

indexctrl.renderIndex=
async (req, res) => {
  const products = await product.find();
  res.render('index',{products});
};


module.exports = indexctrl;