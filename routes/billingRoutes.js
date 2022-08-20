const stripe = require('stripe')(process.env.STRIPE_SECRET);


module.exports = app => {

    app.get('/api/products', async (req, res) => {
        const products = await stripe.products.list({
            limit: 1,
        });
        console.log(products);
        // res.send(products);
        const productList = [];
        products.data.map(async product => {
            const price = await stripe.prices.retrieve(
            product.default_price
            );
            console.log(price);
            productList.push({product, price});
        });

        console.log(productList)
        

    });
    


}