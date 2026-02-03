const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        // version: '',            // by default: '1.0.0'
        title: 'My API',              // by default: 'REST API'
        description: 'Temple API'         // by default: ''
    },
    servers: [
        {
            url: 'http://localhost:8080',   // by default: 'http://localhost:3000'
            description: 'Local server'     // by default: ''
        }
        // { ... }
    ],
    // tags: [                     // by default: empty Array
        // {
            // name: '',           // Tag name
            // description: ''     // Tag description
        // },
        // { ... }
    // ],
    // components: {},           // by default: empty object
    host: 'localhost:8080',   // by default: 'localhost:3000'
    // basePath: '/',             // by default: '/'
    schemes: ['http'],              // by default: ['http']
    // consumes: [],             // by default: ['application/json']
    // produces: [],             // by default: ['application/json']
    // tags: [                   // by default: empty Array
        // {
        // name: '',             // Tag name
        // description: ''       // Tag description
        // },
        // { ... }
    // ],
    /// securityDefinitions: {},  // by default: empty object
    // definitions: {}           // by default: empty object
};

const outputFile = './swagger.json';
const routes = [ './routes/temple.js']; // './routes/index.js

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(
    outputFile, // <string>
    routes, // <string[]>
    doc // <object> => Promise <any>
);

// swaggerAutogen(outputFile, routes, doc).then(() => {
  // require('./index.js'); // Your project's root file
// });