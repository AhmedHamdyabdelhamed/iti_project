const mongoose = require('mongoose');

async function connectDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/E-commerce");
}

connectDb().then(() => { console.log("Database Connected Successfully...") }).catch((error) => { console.log(error) });
