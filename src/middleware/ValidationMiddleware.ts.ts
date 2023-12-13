import { body } from 'express-validator';

export const validateGuestCreate = [
  body('name').notEmpty().isString(),
  body('contactInfo').notEmpty().isString(),
  body('nationality').notEmpty().isString(),
  body('dateOfBirth').notEmpty().isISO8601().toDate(),
  body('idNumber').notEmpty().isString(),
];