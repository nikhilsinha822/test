const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: [String]
    }
});

export default mongoose.model("Org", organisationSchema);