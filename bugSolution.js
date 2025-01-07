```javascript
//Correct aggregation pipeline handling null values
db.collection.aggregate([
  {$match: { /* filter */ }},
  {$group: { _id: '$field', sum: {$sum: {$ifNull: ['$value', 0]} } }},
  {$sort: {sum: -1}},
  {$limit: 10}
])
```