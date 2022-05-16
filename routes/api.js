const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions')

// pobieranie notatek
router.get('/notes', noteActions.getAllNotes)
router.get('/notes/:id', noteActions.getNote)
// zapisywanieni notatek
router.post('/notes/', noteActions.saveNote)

// edytowanie nostatek
router.put('/notes/:id', noteActions.updateNote)
// usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote)





module.exports = router;