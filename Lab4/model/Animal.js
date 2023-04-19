// Require the Mongoose and making the mongoose schema.
const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

// Making the new animal schema and the information it will store.
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

// Assigning the model and exporting it.
const Animal = mongoose.model("Animal", AnimalSchema)
module.exports = Animal;