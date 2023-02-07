/**
 * @swagger
 * /api/cities:
 *  get:
 *      summary: get cities data
 *      tags: [cities]
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
 *              description: 'El país se encontró de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/cities'
 *          400:
 *              description: 'Hubo un problema en al buscar el cargo, intentalo nuevamente'
 */
