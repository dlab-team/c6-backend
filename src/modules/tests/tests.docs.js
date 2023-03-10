/**
 * @swagger
 * components:
 *  schemas:
 *    Test:
 *      type: array
 *      items:
 *          type: object
 *          properties:
 *          name:
 *              type: string
 *              description: ther user name
 *          url:
 *              type: string
 *              description: the url of the test
 *          imagenUrl:
 *              type: string
 *              description: the url of the image
 *          descripcion:
 *              type: string
 *              description: the description of the Test
 *      required:
 *        - name
 *          url
 *          imageUrl
 *          description
 *      example:
 *            - name: Javascript
 *              url: https://www.prueba_javascript.cl'
 *              imagenUrl: https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png
 *              descripcion: Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Javascript
 *            - name: Python
 *              url: https://www.prueba_python.cl'
 *              imagenUrl: https://miro.medium.com/max/256/1*ztqS5rRI29GHxZa6uPF2UA.png
 *              descripcion: Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Python
 */

/**
 * @swagger
 * /api/tests/:id:
 *  get:
 *      summary: get a single Test data
 *      tags: [Test]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          url:
 *                              type: string
 *                          imagenUrl:
 *                              type: string
 *                          descripcion:
 *                              type: string
 *                          deleted:
 *                              type: boolean
 *                      
 *      responses:
 *          201:
 *              description: 'El Test se obtuvo de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string 
 *                              url:
 *                                  type: string
 *                              imagenUrl:
 *                                  type: string
 *                              descripcion:
 *                                  type: string
 *                              deteled:
 *                                  type: boolean
 *                          example:
 *                              name: Javascript
 *                              url: https://www.prueba_javascript.cl'
 *                              imagenUrl: https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png
 *                              descripcion: Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Javascript
 *                              deleted: boolean
 *          400:
 *              description: 'Hubo un problema al mostrar un Test, intentalo nuevamente'      
 */

/**
 * @swagger
 * /api/tests:
 *  get:
 *      summary: get Tests data
 *      tags: [Test]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              url:
 *                                  type: string
 *                              imagenUrl:
 *                                  type: string
 *                              descripcion:
 *                                  type: string
 *                              deleted:
 *                                  type: boolean
 *      responses:
 *          201:
 *              description: 'La información se trajo de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Test'
 *          400:
 *              description: 'Hubo un problema al mostrar todos los Test, intentelo nuevamente'
 */

/**
 * @swagger
 * /api/tests:
 *  post:
 *      summary: create Test data
 *      tags: [Test]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          url:
 *                              type: string
 *                          imagenUrl:
 *                              type: string
 *                          descripcion:
 *                              type: string                    
 *      responses:
 *          201:
 *              description: 'El Test se creó de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string 
 *                              url:
 *                                  type: string
 *                              imagenUrl:
 *                                  type: string
 *                              descripcion:
 *                                  type: string
 *                          example:
 *                              name: Ruby on Rails
 *                              url: https://www.prueba_ruby_on_rails.cl
 *                              imagenUrl: https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png
 *                              descripcion: Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Ruby on Rails
 *          400:
 *              description: 'Hubo un problema en la creación del Test, intentalo nuevamente'      
 */

/**
 * @swagger
 * /api/tests/:id:
 *  put:
 *      summary: update Test data
 *      tags: [Test]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          url:
 *                              type: string
 *                          imagenUrl:
 *                              type: string
 *                          descripcion:
 *                              type: string
 *                      
 *      responses:
 *          201:
 *              description: 'El Test se actualizo de manera exitosa'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string 
 *                              url:
 *                                  type: string
 *                              imagenUrl:
 *                                  type: string
 *                              descripcion:
 *                                  type: string
 *                          example:
 *                              name: C++
 *                              url: https://www.prueba_c++.cl'
 *                              imagenUrl: https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png
 *                              descripcion: Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en C++
 *          400:
 *              description: 'Hubo un problema en la creación del Test, intentalo nuevamente'      
 */