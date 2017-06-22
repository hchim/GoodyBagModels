var catSchema = require('./Catalog');
var productSchema = require('./Product');

exports.Catalog = function (conn) {
    return conn.model('Catalog', catSchema);
}

exports.Product = function (conn) {
    return conn.model('Product', productSchema);
}