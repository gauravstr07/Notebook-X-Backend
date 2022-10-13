const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/notebookX'

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected to mongodb🎃')
    });
}

module.exports = connectToMongo