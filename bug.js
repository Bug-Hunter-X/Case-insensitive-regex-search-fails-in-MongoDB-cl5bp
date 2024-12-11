```javascript
const query = { name: /John/i }; // Case-insensitive search

// This will not find any documents with a name like 'john'
db.collection('users').find(query).toArray((err, docs) => {
  console.log(docs); // Empty array
});
```