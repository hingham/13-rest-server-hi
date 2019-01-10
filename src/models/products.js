'use strict';

const product = require('./product-schema.js');

/**
 *
 *
 * @class Products
 */
class Products {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return product.find(queryObject);
  }
  
  post(record) {
    let newRecord = new product(record);
    return newRecord.save();
  }

  put(id, entry) {
    entry._id = id;
    return product.update({"_id": id}, {$set:{"category":entry.category, "name": entry.name, "description":entry.description, "display": entry.display} });
  }

  delete(id) {
    return product.deleteOne({"_id": id} );
  }

}

module.exports = Products;
