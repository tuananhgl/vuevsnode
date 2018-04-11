module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const users = require('../controllers/user.controller.js')

    //Create a new Note
    app.post('/notes', notes.create);

    // lay tat ca
    app.get('/notes', notes.findAll);

    // lay 1 note ra
    app.get('/notes/:noteId', notes.findOne);

    // update 1 note
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

    // Create a User 
    app.post('/user', users.create);

    //Find an user from databbase
    app.get('/user/:username/:password', users.findUser);

}