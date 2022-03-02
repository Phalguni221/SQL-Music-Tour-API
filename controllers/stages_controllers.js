// DEPENDENCIES
const Stages = require('express').Router()
const db = require('../models')
const {Stage} = db 
const { Op } = require('sequelize')

   
// FIND ALL StagesS
Stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stages.findAll({
            order: [ [ 'available_start_time', 'ASC' ], ['stage_id', '30'], ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`},
                id: {
                    [Op.lt]: 30                 
                 }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Stages
Stages.post('/', async (req, res) => {
    try {
        const newStages = await Stages.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stages',
            data: newStages
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Stages
Stages.put('/:id', async (req, res) => {
    try {
        const updateStages = await Stages.update(req.body, {
            where: {
                Stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} Stages(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Stages
Stages.delete('/:id', async (req, res) => {
    try {
        const deletedStagess = await Stages.destroy({
            where: {
                Stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStagess} Stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// EXPORT
module.exports = Stages
