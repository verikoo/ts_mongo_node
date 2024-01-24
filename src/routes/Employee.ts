import express from 'express';
import controller from '../controllers/Employee';

const router = express.Router();

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     description: Create a new employee with the provided details.
 *     parameters:
 *       - name: name
 *         in: body
 *         description: Name of the employee
 *         required: true
 *         schema:
 *           type: string
 *       - name: role
 *         in: body
 *         description: Role of the employee
 *         required: true
 *         schema:
 *           type: string
 *       - name: contactInfo
 *         in: body
 *         description: Contact information of the employee
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Bad request, check the request payload
 */
router.post('/', controller.createEmployee);

/**
 * @swagger
 * /employees/{employeeId}:
 *   get:
 *     summary: Get employee by ID
 *     description: Get employee details by providing the employee ID.
 *     parameters:
 *       - name: employeeId
 *         in: path
 *         description: ID of the employee
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Employee not found
 */
router.get('/:employeeId', controller.readEmployee);

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     description: Get details of all employees.
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', controller.readAllEmployee);

// Similar annotations for other routes (PATCH and DELETE)

export = router;
