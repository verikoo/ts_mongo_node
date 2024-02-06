import express from 'express';
import { Router } from "express";
import controller from '../controllers/Employee';

const router = Router();

/**
 * @swagger
 * /employee:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Employee Endpoints
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
router.post('/',  controller.createEmployee);


/**
 * @swagger
 * /employee/{employeeId}:
 *   get:
 *     summary: Retrieve a specific employee by ID
 *     tags:
 *       - Employee Endpoints
 *     description: Retrieve a specific employee by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         description: ID of the employee to retrieve
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
 *                 employeeId:
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

router.get('/:employeeId', controller.readEmployee);




/**
 * @swagger
 * /employee:
 *   get:
 *     summary: Retrieve all employees
 *     tags:
 *       - Employee Endpoints
 *     description: Retrieve a list of all employees from the server.
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
 *                   employeeId:
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
router.get('/', controller.readAllEmployee);



/**
 * @swagger
 * /employee/{employeeId}:
 *   patch:
 *     summary: Update a specific employee by ID
 *     tags:
 *      - Employee Endpoints
 *     description: Update a specific employee by their ID on the server.
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         description: ID of the employee to update
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
 *                 employeeId:
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

router.patch('/:employeeId', controller.updateEmployee);


/**
 * @swagger
 * /employee/{employeeId}:
 *   delete:
 *     summary: Delete a specific employee by ID
 *     tags:
 *       - Employee Endpoints
 *     description: Delete a specific employee by their ID from the server.
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         description: ID of the employee to delete
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

router.delete('/:employeeId', controller.deleteEmployee);





export = router;
