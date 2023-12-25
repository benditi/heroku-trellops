require('dotenv').config() // for using .env file
module.exports = {
  // dbURL:'mongodb+srv://David:db2eatdb@cluster0.txsv9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  dbURL:process.env.DB_URL
};

