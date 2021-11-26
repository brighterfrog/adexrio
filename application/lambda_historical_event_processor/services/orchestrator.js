
 "use strict";



 class Orchestrator {
     Test(){
         console.log('TEST DID WORK');
     }
 }

 module.exports = [Orchestrator]

// exports.handleEvent = async (event, context) => {  
//     event.Records.forEach(record => {
//         const { body } = record;
//         console.log(body);
//       });        
// }