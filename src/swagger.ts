// /projects/express-mongo-typescript/src/swagger.ts
import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';

const options: Options = {
    definition: {
        openapi: '3.0.0', // Specify the version of OpenAPI you are using
        info: {
            title: 'Your API',
            version: '1.0.0',
            description: 'API documentation for Your Project',
        },
    },
   apis: [path.join(__dirname, 'src/routes/*.ts')],

};

const specs = swaggerJsdoc(options);

export { specs };

// Create a function to set up Swagger UI
export function setupSwagger(app: express.Application) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
