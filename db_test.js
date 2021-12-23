const { MongoClient } = require('mongodb');

// Connection URL
const url = `mongodb+srv://Rosa:Mongo1702@cluster0.iw7zn.mongodb.net/node-test?retryWrites=true&w=majority`
const client = new MongoClient(url);

// Database Name
const dbName = 'node-test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const blogs = db.collection('blogs');
  const findResult = await blogs.find({}).toArray();
console.log('Found documents =>', findResult);

const insertResult = await blogs.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);
  

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



