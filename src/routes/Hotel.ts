import express from 'express';
import controller from '../controllers/Hotel';

const router = express.Router();

/**
 * @swagger
 * /hotel:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Hotel Endpoints
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
router.post('/', controller.createHotel);


/**
 * @swagger
 * /hotel:
 *   get:
 *     summary: Retrieve all hotels
 *     tags:
 *       - Hotel Endpoints
 *     description: Retrieve a list of all hotels from the server.
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
 *                   hotelId:
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
router.get('/', controller.readAllHotels);


/**
 * @swagger
 * /hotel/{hotelId}:
 *   get:
 *     summary: Retrieve a specific hotel by ID
 *     tags:
 *       - Hotel Endpoints
 *     description: Retrieve a specific hotel by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: hotelId
 *         required: true
 *         description: ID of the hotel to retrieve
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
 *                 hotelId:
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
router.get('/:hotelId', controller.readHotel);



/**
 * @swagger
 * /hotel/{hotelId}:
 *   patch:
 *     summary: Update a specific hotel by ID
 *     tags:
 *      - Hotel Endpoints
 *     description: Update a specific hotel by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: hotelId
 *         required: true
 *         description: ID of the hotel to update
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
 *                 hotelId:
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
router.patch('/:hotelId', controller.updateHotel);

/**
 * @swagger
 * /hotel/{hotelId}:
 *   delete:
 *     summary: Delete a specific hotel by ID
 *     tags:
 *       - Hotel Endpoints
 *     description: Delete a specific hotel by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: hotelId
 *         required: true
 *         description: ID of the hotel to delete
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
router.delete('/:hotelId', controller.deleteHotel);


// router.get('/:hotelId', controller.getClassInfo);


export = router;
