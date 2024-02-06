import express from 'express';
import controller from '../controllers/Guest';
import { validateGuestCreate } from '../middleware/ValidationMiddleware.ts';

const router = express.Router();
/**
 * @swagger
 * /guest:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Guest Endpoints
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
router.post('/', validateGuestCreate, controller.createGuest);


/**
 * @swagger
 * /guest/{guestId}:
 *   get:
 *     summary: Retrieve a specific guest by ID
 *     tags:
 *       - Guest Endpoints
 *     description: Retrieve a specific guest by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: guestId
 *         required: true
 *         description: ID of the guest to retrieve
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
 *                 guestId:
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
router.get('/:guestId', controller.readGuest);

/**
 * @swagger
 * /guest:
 *   get:
 *     summary: Retrieve all guests
 *     tags:
 *       - Guest Endpoints
 *     description: Retrieve a list of all guests from the server.
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
 *                   guestId:
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
router.get('/', controller.readAllGuests);

/**
 * @swagger
 * /guest/{guestId}:
 *   patch:
 *     summary: Update a specific guest by ID
 *     tags:
 *      - Guest Endpoints
 *     description: Update a specific guest by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: guestId
 *         required: true
 *         description: ID of the guest to update
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
 *                 guestId:
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
router.patch('/:guestId', controller.updateGuest);


/**
 * @swagger
 * /guest/{guestId}:
 *   delete:
 *     summary: Delete a specific guest by ID
 *     tags:
 *       - Guest Endpoints
 *     description: Delete a specific guest by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: guestId
 *         required: true
 *         description: ID of the guest to delete
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
router.delete('/:guestId', controller.deleteGuest);

export = router;