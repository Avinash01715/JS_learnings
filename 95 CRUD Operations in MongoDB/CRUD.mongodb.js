
//CREATE

use("CRUD_db")

db.createCollection("learnings")

// db.learnings.insertOne({
//     name: "black chai",
//     price: 100,
//     taste: "strong"
// })

// db.learnings.insertMany([
    
//   {
//     name: "black chai",
//     price: 100,
//     taste: "strong"
//   },
//   {
//     name: "masala chai",
//     price: 120,
//     taste: "spicy"
//   },
//   {
//     name: "green tea",
//     price: 80,
//     taste: "mild"
//   },
//   {
//     name: "ginger chai",
//     price: 110,
//     taste: "pungent"
//   },
//   {
//     name: "cardamom chai",
//     price: 130,
//     taste: "aromatic"
//   },
//   {
//     name: "kashmiri kahwa",
//     price: 150,
//     taste: "floral"
//   },
//   {
//     name: "lemon tea",
//     price: 90,
//     taste: "citrusy"
//   },
//   {
//     name: "tulsi chai",
//     price: 105,
//     taste: "herbal"
//   },
//   {
//     name: "elaichi chai",
//     price: 115,
//     taste: "sweet"
//   },
//   {
//     name: "assam black tea",
//     price: 95,
//     taste: "bold"
//   }

// ])


//READ

// let a = db.learnings.find({price:115})
// console.log(a.count())

// let b = db.learnings.find({price:100})
// console.log(b.toArray())

// db.learnings.findOne({name: "elaichi chai"})

//UPDATE

db.learnings.updateOne({price: 115},{$set: {price: 101}})
db.learnings.updateMany({price: 115},{$set: {price: 101}})


// DELETE

db.learnings.deleteOne({price: 100})
db.learnings.deleteMany({price: 100})




