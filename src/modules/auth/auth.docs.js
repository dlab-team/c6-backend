
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: ther user name
 *        email:
 *          type: string
 *          description: the user email
 *        password:
 *          type: string
 *          description: the user password
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: John
 *        email: john@email.com
 *        password: password       
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      summary: create new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
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

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: login the user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: oject
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: 'Autenticación exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *          400:
 *              description: 'Falló la Autenticación'
 *                     
 */

/**
 * @swagger
 * /api/auth/recovery:
 *  post:
 *      summary: ask for change the password
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: oject
 *                      properties:
 *                          email:
 *                              type: string
 *      responses:
 *          200:
 *              description: 'Token enviado de forma exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *          400:
 *              description: 'Falló la Autenticación'
 *                     
 */

/**
 * @swagger
 * /api/auth/changePassword:
 *  put:
 *      summary: set the new password
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: oject
 *                      properties:
 *                          password:
 *                              type: string
 *                          confirmPassword:
 *                              type: string
 *                          token:
 *                              type: string
 *      responses:
 *          200:
 *              description: 'Contraseña actualizada exitosamente'
 *          400:
 *              description: 'Ocurrio un problema actualizando la contraseña'
 *                     
 */