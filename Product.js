var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true
    },
    description: String,
    _catalog: {
        type: ObjectId,
        ref: "Catalog"
    },
    listPrice: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createTime: {type: Date, default: Date.now},
    iconImage: String,
    images: [String],
    status: {
        type: String,
        enum: ['Unpublished', 'Published', 'Deleted'],
        default: 'Draft'
    }
});

// indexes

schema.index({asin: 1});
schema.index({_catalog: 1});

schema.set('autoIndex', true);

// methods

module.exports = schema;
