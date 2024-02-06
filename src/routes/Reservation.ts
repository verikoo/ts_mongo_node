import express from 'express';
import controller from '../controllers/Reservation';


const router = express.Router();
/**
 * @swagger
 * /reservation:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Reservation Endpoints
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
router.post('/', controller.createReservation);

/**
 * @swagger
 * /reservation/{reservationId}:
 *   get:
 *     summary: Retrieve a specific reservation by ID
 *     tags:
 *       - Reservation Endpoints
 *     description: Retrieve a specific reservation by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         description: ID of the reservation to retrieve
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
 *                 reservationId:
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
router.get('/:reservationId', controller.readReservation);


/**
 * @swagger
 * /reservation:
 *   get:
 *     summary: Retrieve all reservations
 *     tags:
 *       - Reservation Endpoints
 *     description: Retrieve a list of all reservations from the server.
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
 *                   reservationId:
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
router.get('/', controller.readAllReservation);


/**
 * @swagger
 * /reservation/{reservationId}:
 *   patch:
 *     summary: Update a specific reservation by ID
 *     tags:
 *      - Reservation Endpoints
 *     description: Update a specific reservation by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         description: ID of the reservation to update
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
 *                 reservationId:
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
router.patch('/:reservationId', controller.updateReservation);


/**
 * @swagger
 * /reservation/{reservationId}:
 *   delete:
 *     summary: Delete a specific reservation by ID
 *     tags:
 *       - Reservation Endpoints
 *     description: Delete a specific reservation by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         description: ID of the reservation to delete
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
router.delete('/:reservationId', controller.deleteReservation);

export = router;