
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core'


const awsmobile = require('./../aws-exports');

Amplify.configure(awsmobile.default);

export { API, graphqlOperation, GraphQLResult, Amplify }

// module.exports = {     
//     API,
//     graphqlOperation,
//     Amplify
// }
