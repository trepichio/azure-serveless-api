const createMongoClient = require('../shared/mongoClient.js');
const {ObjectID} = require('mongodb');

module.exports = async function (context, req) {
    const { client: MongoClient, closeConnectionFn } = await createMongoClient()

    const { id } = req.params

    const Products = MongoClient.collection('products')

    try {
        const res = await Products.findOne({_id: ObjectID(id) })

        if (!res) {
            context.res = {
                status: 404,
                body: {
                    message: 'product not found'
                }
            }
            return;
        }

        context.res = {
            status: 200,
            body: res
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: {
                message: 'Error on get product.'
            }
        };

    } finally {
        closeConnectionFn()
        context.log('db connection closed')
    }


}