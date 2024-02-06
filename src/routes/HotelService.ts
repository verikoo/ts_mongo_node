import express from 'express';
import controller from '../controllers/HotelService';

const router = express.Router();
/**
 * @swagger
 * /hotelService:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - HotelService Endpoints
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
router.post('/',  controller.createHotelService);

/**
 * @swagger
 * /hotelService/{hotelServiceId}:
 *   get:
 *     summary: Retrieve a specific hotelService by ID
 *     tags:
 *       - HotelService Endpoints
 *     description: Retrieve a specific hotelService by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: hotelServiceId
 *         required: true
 *         description: ID of the hotelService to retrieve
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
 *                 hotelServiceId:
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
router.get('/:hotelServiceId', controller.readHotelService);

/**
 * @swagger
 * /hotelService:
 *   get:
 *     summary: Retrieve all hotelServices
 *     tags:
 *       - HotelService Endpoints
 *     description: Retrieve a list of all hotelServices from the server.
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
 *                   hotelServiceId:
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
router.get('/', controller.readAllHotelService);


/**
 * @swagger
 * /hotelService/{hotelServiceId}:
 *   patch:
 *     summary: Update a specific HotelService by ID
 *     tags:
 *      - HotelService Endpoints
 *     description: Update a specific HotelService by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: hotelServiceId
 *         required: true
 *         description: ID of the HotelService to update
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
 *                 hotelServiceId:
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
router.patch('/:hotelServiceId', controller.updateHotelService);

/**
 * @swagger
 * /hotelService/{hotelServiceId}:
 *   delete:
 *     summary: Delete a specific hotelService by ID
 *     tags:
 *       - HotelService Endpoints
 *     description: Delete a specific hotelService by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: hotelServiceId
 *         required: true
 *         description: ID of the hotelService to delete
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
router.delete('/:hotelServiceId', controller.deleteHotelService);

export = router;