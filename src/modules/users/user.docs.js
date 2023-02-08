
/**
 * @swagger
 * /api/user/profile:
 *  get:
 *      summary: get user data
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: 'El registro se completó de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          400:
 *              description: 'Hubo un problema en el registro, intentalo nuevamente'      
 */
