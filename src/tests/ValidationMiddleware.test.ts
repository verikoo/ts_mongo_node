import { validationResult } from 'express-validator';
import { validateGuestCreate } from '../middleware/ValidationMiddleware.ts';

describe('Guest Validation', () => {
  it('should validate guest creation fields correctly', async () => {
    // Valid data for testing
    const validGuestData = {
      name: 'John Doe',
      contactInfo: 'john@example.com',
      nationality: 'US',
      dateOfBirth: '1990-01-01',
      idNumber: '1234567890',
    };

    // Simulating the request object
    const req: any = { body: validGuestData };

    // Run validation middleware
    await Promise.all(validateGuestCreate.map((validator) => validator(req, {}, () => {})));

    // Check for validation errors
    const errors = validationResult(req);
    expect(errors.isEmpty()).toBeTruthy(); // Should not have any validation errors
  });

  it('should fail on invalid data', async () => {
    // Invalid data for testing
    const invalidGuestData = {
      // Missing 'name' field intentionally
      contactInfo: 'john@example.com',
      nationality: 'US',
      dateOfBirth: '1990-01-01',
      idNumber: '1234567890',
    };

    // Simulating the request object
    const req: any = { body: invalidGuestData };

    // Run validation middleware
    await Promise.all(validateGuestCreate.map((validator) => validator(req, {}, () => {})));

    // Check for validation errors
    const errors = validationResult(req);
    expect(errors.isEmpty()).toBeFalsy(); // Should have validation errors
  });
});
