'use strict';
let sanitize = require('./category-sanitize.js');
let uuid = require('uuid/v4');

/**
 *
 *
 * @class Categories
 */
class Categories {

  constructor() {
    this.db = [];
  }

  get(_id) {
    let response = _id ? this.db.filter( record => record._id === _id) : this.db;
    return Promise.resolve(response);
  }
  
  post(entry) {
    entry._id = uuid();
    let record = sanitize(entry);
    if(record._id){this.db.push(record);}
    return Promise.resolve(record);
  }

  put(_id, entry) {
    entry._id = _id;
    let record = sanitize(entry);
    for (let i = 0; i< this.db.length; i++){
      if(this.db[i]._id === _id){
        this.db[i] = record;
      }
    }
    return Promise.resolve(record);
  }

  delete(_id) {
    let deleted;
    for (let i = 0; i< this.db.length; i++){
      if(this.db[i]._id === _id){
        deleted = this.db[i];
        this.db.splice(i, 1);
      }
    }
    return Promise.resolve(deleted);
  }

}


module.exports = Categories;
