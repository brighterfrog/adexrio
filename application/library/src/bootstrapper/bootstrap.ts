
import { API, graphqlOperation, Amplify } from 'aws-amplify';
const awsmobile = require('../aws-exports');

Amplify.configure(awsmobile.default);

module.exports = {     
    API,
    graphqlOperation,
    Amplify
}
