const Note = require('../models/note.model.js');

exports.create = (req,res) => {
    if(!req.body.content) {
        return res.status(404).send({
            message: "Note content can not be empty"
        });
    }
    const note  = new Note({
        title : req.body.title || "Dang cap nhat",
        content: req.body.content
    });

    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            })
        });
};
exports.findAll = (req,res) => {
    Note.find().sort({_id: -1})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            })
        })
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Can not found data with id= "+req.params.noteId
                })
            }
            res.send(data)
        })
        .catch(err => {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Not not found with id " + req.params.noteId
                })
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            })
        })
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    //Kiem tra data request len
    if(!req.body.title) {
        return res.status(400).send({
            message: "Note content can not be empty"
        })
    }

    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || 'Dang Cap Nhat',
        content: req.body.content
    }, {new: true})
    .then(data => {
        if(!data) {
            return  res.status(404).send({
                message: "Note not found width id " + req.params.noteId
            })
        }
        res.send(data)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id "+req.params.noteId
            })
            res.status(500).send({
                message: "Error updating note with id " +req.params.noteId
            })
        }
    }) 

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.noteId) 
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id "+req.params.noteId
            })
        }
        res.send({
            message: "Delete Susccess fully"
        });
    })  
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Can not found id "+req.params.noteId
            })
        }
        return res.status(500).send({
            message: "Could not delete with id  " + req.params.noteId
        })
    })
};


exports.createData = (req,res) => {
    if(!req.body.title) {
        res.status(404).send({
            message: "Not null of title"
        })
    }
    const dataRequets = new Data ({
        title: req.body.title,
        des: req.body.des,
        content: req.body.content,
        f1: req.body.f1
    });
    dataRequets.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data."
            })
        });
}
