var mongoose = require("mongoose");

var schema = mongoose.Schema({
    catName: {
        type: String,
        required: true,
        unique: true
    },
    displayName: String
});

// indexes

schema.index({ catName: 1});

schema.set('autoIndex', true);

// methods

module.exports = schema;
