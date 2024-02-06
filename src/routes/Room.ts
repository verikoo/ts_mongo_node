import express from 'express';
import controller from '../controllers/Room';

const router = express.Router();
/**
 * @swagger
 * /room:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Room Endpoints
 *          description: Send a message to the server and get a response added to the original text.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              responseText:
 *                                  type: string
 *                                  example: This is some example string! This is an endpoint
 *          responses:
 *              201:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  text:
 *                                      type: string
 *                                      example: This is some example string!
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
router.post('/', controller.createRoom);


/**
 * @swagger
 * /room/{roomId}:
 *   get:
 *     summary: Retrieve a specific room by ID
 *     tags:
 *       - Room Endpoints
 *     description: Retrieve a specific room by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to retrieve
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roomId:
 *                   type: string
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.get('/:roomId', controller.readRoom);


/**
 * @swagger
 * /room:
 *   get:
 *     summary: Retrieve all rooms
 *     tags:
 *       - Room Endpoints
 *     description: Retrieve a list of all rooms from the server.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   roomId:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.get('/', controller.readAllRoom);

/**
 * @swagger
 * /room/{roomId}:
 *   patch:
 *     summary: Update a specific room by ID
 *     tags:
 *      - Room Endpoints
 *     description: Update a specific room by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to update
 *         schema:
 *           type: string
 *           example: "65b178fc989abf9f882ea008"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Employee Name
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roomId:
 *                   type: string
 *                   example: "65b178fc989abf9f882ea008"
 *                 name:
 *                   type: string
 *                   example: New Employee Name
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:roomId', controller.updateRoom);


/**
 * @swagger
 * /room/{roomId}:
 *   delete:
 *     summary: Delete a specific room by ID
 *     tags:
 *       - Room Endpoints
 *     description: Delete a specific room by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to delete
 *         schema:
 *           type: string
 *           example: "65b178fc989abf9f882ea008"
 *     responses:
 *       204:
 *         description: No content (successful deletion)
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:roomId', controller.deleteRoom);

export = router;