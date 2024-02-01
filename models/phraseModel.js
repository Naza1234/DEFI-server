const mongoose = require('mongoose');

const PhraseSchema = mongoose.Schema({
    keyphrase: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const PhraseModel = mongoose.model('Phrase', PhraseSchema);

module.exports = PhraseModel;
