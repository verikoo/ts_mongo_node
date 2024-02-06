import express from 'express';
import controller from '../controllers/Payment';

const router = express.Router();
/**
 * @swagger
 * /payment:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Payment Endpoints
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
router.post('/', controller.createPayment);


/**
 * @swagger
 * /payment/{paymentId}:
 *   get:
 *     summary: Retrieve a specific payment by ID
 *     tags:
 *       - Payment Endpoints
 *     description: Retrieve a specific payment by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         description: ID of the payment to retrieve
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
 *                 paymentId:
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
router.get('/:paymentId', controller.readPayment);


/**
 * @swagger
 * /payment:
 *   get:
 *     summary: Retrieve all payments
 *     tags:
 *       - Payment Endpoints
 *     description: Retrieve a list of all payments from the server.
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
 *                   paymentId:
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
router.get('/', controller.readAllPayments);

/**
 * @swagger
 * /payment/{hotelId}:
 *   patch:
 *     summary: Update a specific payment by ID
 *     tags:
 *      - Payment Endpoints
 *     description: Update a specific payment by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: hotelId
 *         required: true
 *         description: ID of the payment to update
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
router.patch('/:paymentId', controller.updatePayment);


/**
 * @swagger
 * /payment/{paymentId}:
 *   delete:
 *     summary: Delete a specific payment by ID
 *     tags:
 *       - Payment Endpoints
 *     description: Delete a specific payment by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         description: ID of the payment to delete
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
router.delete('/:paymentId', controller.deletePayment);

export = router;
