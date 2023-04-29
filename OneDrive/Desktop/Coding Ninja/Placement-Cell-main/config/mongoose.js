const mongoose = require('mongoose');

// Define an async function to establish a connection to a MongoDB database cluster.
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/app');
    console.log("connection Successfull !! ");
}

// Call the main() function and catch any errors that occur during the connection attempt.
main().catch(error =>console.log("connection not successfull !!"));