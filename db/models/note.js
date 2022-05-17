const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
})


// model doesn't allow validation
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;