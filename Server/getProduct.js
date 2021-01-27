const  product = require('../products.json')

const getProduct = (req, res) => {
    const item = product.find((val) => val.id === parseInt(req.params))
    if(!item) {
        return res.status(500).send('Unlisted Item')
    }
    res.status(200).send(item)
}

module.exports = getProduct