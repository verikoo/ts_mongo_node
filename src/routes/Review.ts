import express from 'express';
import controller from '../controllers/Review';

const router = express.Router();
/**
 * @swagger
 * /review:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Review Endpoints
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
router.post('/',  controller.createReview);


/**
 * @swagger
 * /review/{reviewId}:
 *   get:
 *     summary: Retrieve a specific review by ID
 *     tags:
 *       - Review Endpoints
 *     description: Retrieve a specific review by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         description: ID of the review to retrieve
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
 *                 reviewId:
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
router.get('/:reviewId', controller.readReview);

/**
 * @swagger
 * /review:
 *   get:
 *     summary: Retrieve all reviews
 *     tags:
 *       - Review Endpoints
 *     description: Retrieve a list of all reviews from the server.
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
 *                   reviewId:
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
router.get('/', controller.readAllReviews);


/**
 * @swagger
 * /review/{reviewId}:
 *   patch:
 *     summary: Update a specific review by ID
 *     tags:
 *      - Review Endpoints
 *     description: Update a specific review by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         description: ID of the review to update
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
 *                 reviewId:
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
router.patch('/:reviewId', controller.updateReview);


/**
 * @swagger
 * /review/{reviewId}:
 *   delete:
 *     summary: Delete a specific review by ID
 *     tags:
 *       - Review Endpoints
 *     description: Delete a specific review by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         description: ID of the review to delete
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
router.delete('/:reviewId', controller.deleteReview);

export = router;