import { Amplify } from '@aws-amplify/core'
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api';
const awsmobile = require('./../aws-exports');

Amplify.configure(awsmobile.default);

export { API, graphqlOperation, GraphQLResult, Amplify }
