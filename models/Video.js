const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VideoSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: String,
        language: String,
        ytID: String,
        isFree: Boolean
    }
)

module.exports = mongoose.model('Video', VideoSchema)
