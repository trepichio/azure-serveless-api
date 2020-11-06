const createMongoClient = require('../shared/mongoClient');
const {ObjectID} = require('mongodb');
const isObjectEmpty = require('../shared/isObjectEmpty');

module.exports = async function (context, req) {
    const { id } = req.params
    const fieldsToUpdate = req.body || {}

    if (!id || isObjectEmpty(fieldsToUpdate)) {
        context.res = {
            status: 400,
            body: {
                message: 'Provide a product information and its id on params'
            }
        }
        return;
    }

    const {client: MongoClient, closeConnectionFn} = await createMongoClient()

    const Products = MongoClient.collection('products')
    try {
        const res = await Products.findOneAndUpdate(
            {_id: ObjectID(id)},
            {$set: fieldsToUpdate}
        )

        if (!res || res.value === null) {
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
            body: {
                originalValue: res.value
            }
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {
                message: 'Error on update product'
            }
        }
    } finally {
        closeConnectionFn()
        context.log('db connection closed')
    }


}