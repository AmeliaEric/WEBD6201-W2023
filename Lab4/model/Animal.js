const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    Zoo: {
        type: String,
        required: true
    },
    
    Scientific_Name: {
        type: String,
        required: true
    },
    
    Common_Name: {
        type: String,
        required: true
    },

    Given_Name: {
        type: String,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    DOB: {
        type: Date,
        required: true
    },

    Age: {
        type: Number,
        required: true
    },

    isTransportable: {
        type: Boolean,
        required: true
    }
})

const Animal = mongoose.model("Animal", AnimalSchema)
module.exports = Animal;