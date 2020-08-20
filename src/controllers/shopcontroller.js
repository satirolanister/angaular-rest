const ctrolShop = {};

ctrolShop.renderCard = (req, res)=> {
    res.render('shop/car-shop.hbs');
}

ctrolShop.card = (req, res) => {
    res.send('registro compra');
}


module.exports = ctrolShop;

