```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Correct way

db.collection('users').find(query).toArray((err, docs) => {
  console.log(docs); // Documents with names like 'john', 'JOHN', etc.
});
```