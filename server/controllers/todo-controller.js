const ToDo = require('../db/models/todo');

createToDo = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a ToDo',
        })
    }

    const toDo = new ToDo(body);

    if (!toDo) {
        return res.status(400).json({ success: false, error: err })
    }

    toDo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: toDo._id,
                message: 'ToDo created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'ToDo not created!',
            })
        })
}

updateToDo = async (req, res) => {
    ToDo.findOne({ _id: req.params.id }, (err, toDo) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'ToDo not found!',
            })
        }
        toDo.status = !toDo.status;
        toDo
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: toDo._id,
                    message: 'ToDo status updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'ToDo not updated!',
                })
            })
    })
}

deleteToDo = async (req, res) => {
    await ToDo.findOneAndDelete({ _id: req.params.id }, (err, toDo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: toDo });
    }).catch(err => console.log(err))
}


getToDos= async (req, res) => {
    await ToDo.find({}, (err, toDos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!toDos.length) {
            return res
                .status(404)
                .json({ success: false, error: `ToDos not found` })
        }
        return res.status(200).json({ success: true, data: toDos })
    }).catch(err => console.log(err))
}

module.exports = {
  createToDo,
  updateToDo,
  deleteToDo,
  getToDos,
}