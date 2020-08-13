const ctrolShop = {};

ctrolShop.renderCard = (req, res)=> {
    res.send('carrito');
}

ctrolShop.card = (req, res) => {
    res.send('registro compra');
}


module.exports = ctrolShop;

