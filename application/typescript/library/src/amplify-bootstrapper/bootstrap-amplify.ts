
import { API, graphqlOperation, Amplify } from 'aws-amplify';
const awsmobile = require('./../aws-exports');

Amplify.configure(awsmobile.default);

export { API, graphqlOperation, Amplify }

// module.exports = {     
//     API,
//     graphqlOperation,
//     Amplify
// }
