/**
 * @swagger
 * /api/skills:
 *  get:
 *      summary: get skills data
 *      tags: [skills]
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
 *              description: 'La xxx se completó de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/skills'
 *          400:
 *              description: 'Hubo un problema en la consulta, intentelo nuevamente'**/
