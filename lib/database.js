const MongoClient = require("mongodb").MongoClient;

let cacheDb = null;

export const connectToDatabase = async () => {
    if(cacheDb){
        console.log("Use existing connection");
        return Promise.resolve(cacheDb);
    }
    else{
        return MongoClient.connect(process.env.MONGODB_URI, {
            native_parser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            let db = client.db(process.env.DATABASE_NAME);
            console.log("New Database Connection");
            cacheDb = db;
            return cacheDb;
        }).catch((error)=>{
            console.log("Mongo Connection Error");
            console.log(error);
        })
    }
};