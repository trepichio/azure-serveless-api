const createMongoClient = require('../shared/mongoClient');
const {ObjectID} = require('mongodb');

module.exports = async function (context, req) {
    const {id} = req.params

    const {client: MongoClient, closeConnectionFn} = await createMongoClient()

    const Products = await MongoClient.collection('products')

    try {
        const res = await Products.findOneAndDelete({_id: ObjectID(id)})

        if (!res.value || res.value === null) {
            context.res = {
                status: 404,
                body: {
                    message:'product not found'
                }
            };
            return;
        }

        context.res = {
            status: 200,
            body: {
                message: `deleted successfully product: ${res.value._id}`
            }
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {
                message: 'Error on delete product.'
            }
        };

    } finally {
        closeConnectionFn()
        context.log('db connection closed')
    }
}