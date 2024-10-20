import swaggerJSDoc, {Options} from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const swaggerOptions: Options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Task tracker',
            version: '1.0.0',
            description: 'My beatiful API with JWT'
        },
        servers: [
            {
                url:'http://localhost:3000/api',
                description: 'Local server'
            },
            {
              url: 'https://todo-list-api-seven-flax.vercel.app',
              description: 'Vercel server',
            },
        ],
        components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              },
            },
            schemas: {
              Task: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    example: 'Buy groceries',
                  },
                  description: {
                    type: 'string',
                    example: 'Milk, bread, and eggs',
                  },
                },
              },
              User: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    example: 'Jonh Doe'
                  },
                  email: {
                    type: 'email',
                    example: 'jonhdoe@gmail.com'
                  },
                  password: {
                    type: 'string',
                    example: 'mystrongpassword'
                  }
                }
              },
              UserLogin: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    example: 'jonhdoe@gmail.com'
                  },
                  password: {
                    type: 'string',
                    example: 'mystrongpassword'
                  }
                }
              }
            },
          },
          security: [
            {
              bearerAuth: [],
            },
        ]
    },
    apis: ['./src/routes/*.ts']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const setupSwagger = (app: Express): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
      customCssUrl: CSS_URL,
  }));
}