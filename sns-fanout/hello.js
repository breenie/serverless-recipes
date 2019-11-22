'use strict';

module.exports.handler = event => {
  console.log(JSON.stringify(event));
  return Promise.resolve(__filename);
};