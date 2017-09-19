const mongoose = require('mongoose');
const AlbumSchema = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: Number,
    retired: Boolean,
    Albums: [AlbumSchema]
});

const ArtistModel = mongoose.model('artist', ArtistSchema);
module.exports = ArtistModel;