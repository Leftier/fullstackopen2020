const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length == 4) {
  console.log('Usage:')
  console.log('List every person in phonebook..: node mongo.js <password>')
  console.log('Add new person to phonebook.....: node mongo.js <password> <name> <number>')
  process.exit(1)
}
  
const password = process.argv[2]

const url =
`mongodb+srv://leftier:${password}@cluster0.ztbuh.mongodb.net/phone-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

//[ Listing every person in phonebook
if(process.argv.length == 3) {
  console.log('phonebook:')
  Person.find().then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })

} else {
  //[ Otherwise we create a new Person 
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(result => {
    console.log('phone saved!')
    mongoose.connection.close()
  })

}