import { API, graphqlOperation, Amplify } from 'aws-amplify';
import { createIngestionEvent } from './graphql/mutations'

const bootstrap = require('./bootstrapper/bootstrap');

//const awsmobile = require('./aws-exports');
//Amplify.configure(awsmobile.default);

bootstrap.init();

const testObject = {
    payload: JSON.stringify(1234)
};




const foo = async () => {
    try{
        const foobar = await API.graphql(graphqlOperation(createIngestionEvent, {input: testObject}));
        console.log('completed', foobar);
    }
    catch(e) {
        console.log(e);
    }    
  };

  foo();
