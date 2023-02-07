/**
 * @swagger
 * /api/charges:
 *  get:
 *      summary: get charge data
 *      tags: [charges]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          201:
 *              description: 'Cargo se encontró de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/charge'
 *          400:
 *              description: 'Hubo un problema en al buscar el cargo, intentalo nuevamente'
 */
