const mongoose = require('mongoose');

const PrivateKeySchema = mongoose.Schema({
    privateKey: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const PrivateKeyModel = mongoose.model('PrivateKey', PrivateKeySchema);

module.exports = PrivateKeyModel;
