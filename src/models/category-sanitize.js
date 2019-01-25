'use strict'

let schema = {
  name: {required: true},
  display: {required: true},
  description: {required: true},
  _id: {required: true}
}


function sanitize (data) {

  let valid = true;
  let record = {};

  for(let key in schema){
    if(schema[key].required){
      if(data[key]){
        record[key] = data[key];
      }
      else{
        valid = false;
      }
    }
    else{
      record[key]= data[key];
    }
  }
  return valid ? record : undefined;
}


module.exports = sanitize;
