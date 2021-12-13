const s3Storage = require('./services/s3-storage-service');

function getBucketKey(prefix) {
    let current_datetime = new Date();
    let formatted_eventName = current_datetime.getFullYear() + "_" + (current_datetime.getMonth() + 1) + "_" + current_datetime.getDate();

     return `${prefix}/${formatted_eventName}.json`;
 }

exports.handler = async (event, context) => {
    console.log(event);
        
    const primary_terraform_storage_bucket = `${process.env.IngestionBucket}-${process.env.ENV}`;
    
    console.log('primary_terraform_storage_bucket', primary_terraform_storage_bucket);

    let result = await s3Storage.addMessage(primary_terraform_storage_bucket, getBucketKey(`${process.env.BucketPrefix}`), event);      
    
    return result;
};

