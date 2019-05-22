const express = require('express')
const router = express.Router();
const db = require('../data/helpers/actionModel')
router.use(express.json())


router.get('/', (req, res) => {
    db.get()
        .then(value => {
            res.status(200).json(value)
        })
        .catch(error => {
            res.status(500).json({ error: "Problem with get " })
        })
})


router.get("/:id", async(req, res) => {
    const id = req.params.id

    db.get(id)
        .then(gets => {
            res.status(200).json(gets)
        })
        .catch(error => {
            res.status(500).json({ error: "Error !" })
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

router.post('/', async(req, res) => {
    console.log(req.body)
    try {
        const newSctions = await db.insert(req.body)
        res.json({ message: newSctions })
    } catch (err) {
        res.status(500).json({ message: 'Cant add action' })
    }
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