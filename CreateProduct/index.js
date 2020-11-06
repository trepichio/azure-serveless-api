const createMongoClient = require('../shared/mongoClient');
const isObjectEmpty = require('../shared/isObjectEmpty');

module.exports = async function (context, req) {
    const {  client: MongoClient, closeConnectionFn} = await createMongoClient()

    const Products = MongoClient.collection('products')

    const product = req.body || {}

    if (isObjectEmpty(product)) {
        context.res = {
            status: 400,
            body: {
                message: 'Provide a product'
            }
        };
        return;
    }

    try {
        const res = Products.insertOne(product)

        context.res = {
            status: 201
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {
                message: "Error on create product"
            }
        };

    } finally {
        closeConnectionFn()
        context.log('db connection closed')
    }

}