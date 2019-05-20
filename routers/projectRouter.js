const express = require('express')
const router = express.Router()
const db = require('../data/helpers/projectModel')

router.get('/', (req, res) => {
    db.get()
        .then(gets => {
            res.status(200).json(gets)
        })
        .catch(error => {
            res.status(500).json({ error: 'Cant get ifna' })
        })
})


router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get(id)
        .then(gets => {
            res.status(200).json(gets)
        })
        .catch(error => {
            res.status(500).json({ error: 'coukldnt get id ' })
        })
})

router.post('/', (req, res) => {
    const newData = {
        description: req.body.description,
        notes: req.body.notes,
        completed: req.body.completed
    }
    db.insert(newData => {
            res.status(201).json(newData)
        })
        .catch(err => {
            res.status(404).json({ error: "couldnt post data" })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    db.remove(id)
        .then(removed => {
            res.status(201).json(remove)
        })
        .catch(error => {
            res.status(404).json({ error: 'Couldnt deelte?<>' })
        })
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    const newData = {
        description: req.body.description,
        notes: req.body.notes,
        completed: req.body.completed
    }

    db.update(id, newData)
        .then(newStuff => {
            res.status(200).json(newStuff)
        })
        .catch(error => {
            res.status(404).json({ error: 'Couldnt update Sorry bruh' })
        })
})


module.exports = router