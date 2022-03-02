// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const {Event} = db 
const { Op } = require('sequelize')

   
// FIND ALfoundEvents 
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'date', 'ASC' ], ['event_id', '30'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` },
                id: {
                    [Op.lt]: 30                 
                 }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A EVENT
events.post('/', async (req, res) => {
    try {
        const newEVENT= await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A EVENT
events.put('/:id', async (req, res) => {
    try {
        const updatfoundEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatfoundEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A EVENT
events.delete('/:id', async (req, res) => {
    try {
        const deletfoundEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletfoundEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// EXPORT
module.exports = events;
