
import { getPoolSuccessfullBlockEventsProcessed } from '../../../library/src/graphql/queries'
import { API, graphqlOperation } from '../../../library/src/amplify-bootstrapper/bootstrap-amplify';

export class GraphQLService {
    constructor() {

    }

    async test(): Promise<void> {
        try{
            const foobar = await API.graphql(graphqlOperation(getPoolSuccessfullBlockEventsProcessed, {input: { id: 0 }}));
            console.log('completed', foobar);            
        }
        catch(e) {
            console.log(e);
        }    
    }

}