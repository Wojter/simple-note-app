const Note = require('../../db/models/note');

class noteActions {
    saveNote(req, res) {

        // const newNote = new Note ({
        //     title: 'Zrobić zakupy',
        //     body: 'mleko, jajka, woda'
        // });
        // newNote.save().then(()=> {
        //     console.log('notatka została zpisana')
        // });
        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka została stworzona Tytuł: ' + title + ' treść:' + body);
    }

    getAllNotes(req, res) {
        res.send('API działa');
    }
    getNote (req, res) {
        res.send('Info o notatce');
    }
    updateNote (req, res) {
        res.send('Notatka zaktualizowana');
    }
    deleteNote (req, res) {
        const id = req.params.id;
        res.send('Nitatka usunięta ID: ' + id);
    }
}
module.exports = new noteActions;