![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name: LAB Data Modeling

### Author: Hannah Ingham

### Links and Resources
* [repo]
* [travis]
* [back-end](http://xyz.com) (when applicable)


#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### categories.js
#### product-schema.js
#### products.js


### Setup
#### `.env` requirements
* `PORT` - running on 3000
* `MONGODB_URI` - localhost:27017/products

#### Running the app
* `npm start`
* Endpoint:  `api/v1/products` 
  * Returns a JSON object with name, description, display, inside
* Endpoint: `api/v1/categories`
  * eturns a JSON object with name, description, display, and category inside
  
#### Tests
* How do you run tests? 
* * npm run tests
* What assertions were made?
* * Asserts that sanitize work correctly
* * Asserts that post, get, put and delete work correctly for /categories
* What assertions need to be / should be made?
* * Assertions need to be made for the /products route to check categories 

#### UML
Link to an image of the UML for your application and response to events
