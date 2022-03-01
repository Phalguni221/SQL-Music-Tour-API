// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const {Band} = db 
const { Op } = require('sequelize')

   
// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A BAND
// bands.post('/', async (req, res) => {
//     try {
//         const newBand = await Band.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new band',
//             data: newBand
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })
// EXPORT
module.exports = bands
