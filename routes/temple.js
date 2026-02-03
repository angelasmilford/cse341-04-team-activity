const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * @swagger
 * /temples:
 *   get:
 *     summary: Get all temples
 *     tags:
 *       - Temples
 *     responses:
 *       200:
 *         description: A list of temples
 */
routes.get('/', temples.findAll);

/**
 * @swagger
 * /temples/{temple_id}:
 *   get:
 *     summary: Get a single temple by ID
 *     tags:
 *       - Temples
 *     parameters:
 *       - in: path
 *         name: temple_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single temple
 *       404:
 *         description: Temple not found
 */
routes.get('/:temple_id', temples.findOne);

/**
 * @swagger
 * /temples:
 *   post:
 *     summary: Create a new temple
 *     tags:
 *       - Temples
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Temple created
 */
routes.post('/', temples.create);

module.exports = routes;
